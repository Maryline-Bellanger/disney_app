import axios from 'axios';
import { useQueries } from '@tanstack/react-query';
import { FilmsData } from '../types/filmsType';

export default function useFilms(datasFilms: number[]){
    const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
            }
            };
        
    const filmsQueries = useQueries({
        queries: datasFilms.map((film) => {
            return {
                queryKey: ['films', film],
                queryFn: (): Promise<FilmsData> =>
                    axios
                        .get(`https://api.themoviedb.org/3/movie/${film}?language=fr-FR`, options)
                        .then(res => res.data)
            }
        }),
        combine: (results) => {
            return ({
                data: results.map(result => result.data),
                loading: results.some(result => result.isLoading), 
                sortAsc: results.map(result => result.data).sort((a,b) => a && b !== undefined ? a.release_date.localeCompare(b.release_date): 0),
                sortDesc: results.map(result => result.data).sort((a,b) => a && b !== undefined ? b.release_date.localeCompare(a.release_date): 0),
            })
        }
    })

    
    return {
        filmsQueries
    }
}
import axios from "axios";
import { useQueries } from "@tanstack/react-query";
import { FilmsData } from "../types/filmsType";

export default function useFilms(datasFilms: number[]){
    let filmsList = [];

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
        })
    })

    filmsList = filmsQueries.map((films) => films.data)
    
    return {
        filmsList,
    }
}
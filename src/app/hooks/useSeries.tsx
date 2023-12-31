import axios from 'axios';
import { useQueries } from '@tanstack/react-query';
import { SeriesData } from '../types/seriesType';


export default function useSeries(datasSeries: number[]){
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
            }
        };

    const seriesQueries = useQueries({
        queries: datasSeries.map((serie) => {
            return {
                queryKey: ['series', serie],
                queryFn: (): Promise<SeriesData> =>
                    axios
                        .get(`https://api.themoviedb.org/3/tv/${serie}?language=fr-FR`, options)
                        .then(res => res.data)
            }
        }),
        combine: (results) => {
            return ({
                data: results.map(result => result.data),
                loading: results.some(result => result.isLoading),
                sortAsc: results.map(result => result.data).sort((a,b) => a && b !== undefined ? a.first_air_date.localeCompare(b.first_air_date): 0),
                sortDesc: results.map(result => result.data).sort((a,b) => a && b !== undefined ? b.first_air_date.localeCompare(a.first_air_date): 0),
            })
        }
    })
    
    return {
        seriesQueries,
    }
}
import axios from 'axios';
import { useQueries } from '@tanstack/react-query';
import { SeriesData } from '../types/seriesType';


export default function useSeries(datasSeries: number[]){
    let seriesList = [];

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
            })
        }
    })
    
    return {
        seriesQueries,
    }
}
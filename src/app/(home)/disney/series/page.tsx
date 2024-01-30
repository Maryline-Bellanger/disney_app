"use client"
import CardSeries from '@/app/components/cards/CardSeries';
import Loading from '@/app/components/loading/Loading';
import Pagination from '@/app/components/pagination/Pagination';
import { Series } from '@/app/types/definitions';
import useSeries from '@/app/hooks/useSeries';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ISearchParams {
    searchParams: { [key: string]: string | string[] | undefined };
} 

export default function DisneyPixarSeries({ searchParams }: ISearchParams) {
    const page = searchParams['page'] ?? '1';
    const per_page = searchParams['per_page'] ?? '12';
    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page);
    const [order, setOrder] = useState(false);
    const [seriesDisney, setSeriesDisney] = useState<Series[]>([]);

    const getData = async () => {
        await fetch('/api/disney/series')
        .then( res => res.json() )
        .then( data => {
            setSeriesDisney(data.data.rows);
        })
    }
    
    useEffect(() => {
        getData();
    }, [])

    const dataDisney = seriesDisney.map((serie) => serie.tmdb_id);

    const {seriesQueries: SeriesDisney} = useSeries(dataDisney);
    const series = order === true ? SeriesDisney.sortAsc.slice(start, end) : SeriesDisney.sortDesc.slice(start, end);
    const title = 'Séries - Disney / Pixar';

    if (SeriesDisney.loading) return <Loading />;

    return (
        <div className='pt-24 pb-28'>
            <div className='flex items-center justify-between mx-5 mb-4'>
                <h1 className='text-2xl'>{title}</h1>
                <Pagination 
                    hasNextPage={end < SeriesDisney.data.length}
                    hasPrevPage={start > 0} 
                    link='disney/series'
                    perPage='12'
                    />
            </div>
            <div className='flex mx-5 mb-4'>
                <span className='mr-5'>Trier par date</span>
                <button  onClick={() => setOrder(!order)}><Image src={'/images/up_down.png'} alt={''} width={25} height={25} /></button>
            </div>
            <div className='flex flex-wrap justify-center'>
                {series.map((serie) => serie &&
                    <div key={serie.id} className='m-3 w-48'>
                        <CardSeries dataSeries={serie} />
                    </div>
                )}
            </div>
        </div>
    )
}

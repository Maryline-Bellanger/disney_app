"use client"
import CardSeries from '@/app/components/cards/CardSeries'
import Pagination from '@/app/components/pagination/Pagination'
import { dataSeriesDisney } from '@/app/db/dataDisney'
import useSeries from '@/app/hooks/useSeries'
import React from 'react'

interface ISearchParams {
    searchParams: { [key: string]: string | string[] | undefined }
} 

export default function DisneyPixarSeries({ searchParams }: ISearchParams) {
    const page = searchParams['page'] ?? '1';
    const per_page = searchParams['per_page'] ?? '12';
    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page);
    
    const {seriesList: SeriesDisney} = useSeries(dataSeriesDisney);
    const series = SeriesDisney.slice(start, end);
    const title = "Séries Disney - Pixar";

    return (
        <div className='pt-24 pb-28'>
            <div className='flex items-center justify-between mx-5 mb-4'>
                <h1 className='text-2xl'>{title}</h1>
                <Pagination 
                    hasNextPage={end < SeriesDisney.length}
                    hasPrevPage={start > 0} 
                    link='disney/series'
                    perPage="12"
                    />
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

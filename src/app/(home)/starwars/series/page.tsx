"use client"
import CardSeries from '@/app/components/cards/CardSeries';
import Loading from '@/app/components/loading/Loading';
import { dataSeriesStarwars } from '@/app/db/dataStarwars';
import useSeries from '@/app/hooks/useSeries';
import Image from 'next/image';
import { useState } from 'react';

export default function StarwarsSeries() {
    const [order, setOrder] = useState(false);
    const {seriesQueries: SeriesStarwars} = useSeries(dataSeriesStarwars);
    const series = order === true ? SeriesStarwars.sortAsc : SeriesStarwars.sortDesc;
    const title = 'Séries - Starwars';

    if (SeriesStarwars.loading) return <Loading />;

    return (
        <div className='pt-24 pb-28'>
            <div className='flex items-center justify-between mx-5 mb-4'>
                <h1 className='text-2xl'>{title}</h1>
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

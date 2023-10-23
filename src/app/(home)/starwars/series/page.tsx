"use client"
import CardSeries from '@/app/components/cards/CardSeries'
import { dataSeriesStarwars } from '@/app/db/dataStarwars'
import useSeries from '@/app/hooks/useSeries'
import React from 'react'

export default function StarwarsSeries() {
    const {seriesList: SeriesStarwars} = useSeries(dataSeriesStarwars)
    const title = "Séries Starwars";

    return (
        <div className='pt-24 pb-28'>
            <div className='flex items-center justify-between mx-5 mb-4'>
                <h1 className='text-2xl'>{title}</h1>
            </div>
            <div className='flex flex-wrap justify-center'>
                {SeriesStarwars.map((serie) => serie &&
                <div key={serie.id} className='m-3 w-48'>
                    <CardSeries dataSeries={serie} />
                </div>
                )}
            </div>
        </div>
    )
}

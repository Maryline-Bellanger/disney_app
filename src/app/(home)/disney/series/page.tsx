"use client"
import CardSeries from '@/app/components/cards/CardSeries'
import { dataSeriesDisney } from '@/app/db/dataDisney'
import useSeries from '@/app/hooks/useSeries'
import React from 'react' 

export default function DisneyPixarSeries() {
    const {seriesList: SeriesDisney} = useSeries(dataSeriesDisney);
    const title = "Séries Disney - Pixar";

    return (
      <div className='pt-24 pb-28'>
        <div className='flex items-center justify-between mx-5 mb-4'>
                <h1 className='text-2xl'>{title}</h1>
            </div>
          <div className='flex flex-wrap justify-center'>
              {SeriesDisney.map((serie) => serie &&
              <div key={serie.id} className='m-3 w-48'>
                  <CardSeries dataSeries={serie} />
              </div>
              )}
          </div>
      </div>
    )
}

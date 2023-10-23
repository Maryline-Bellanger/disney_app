"use client"
import CardSeries from '@/app/components/cards/CardSeries';
import { dataSeriesMarvel } from '@/app/db/dataMarvel';
import useSeries from '@/app/hooks/useSeries';

export default function MarvelSeries() {
    const {seriesList: SeriesMarvel} = useSeries(dataSeriesMarvel);
    const title = "Séries Marvel";

    return (
      <div className='pt-24 pb-28'>
            <div className='flex items-center justify-between mx-5 mb-4'>
                <h1 className='text-2xl'>{title}</h1>
            </div>
            <div className='flex flex-wrap justify-center'>
                {SeriesMarvel.map((serie) => serie &&
                <div key={serie.id} className='m-3 w-48'>
                    <CardSeries dataSeries={serie} />
                </div>
                )}
            </div>
      </div>
    )
}

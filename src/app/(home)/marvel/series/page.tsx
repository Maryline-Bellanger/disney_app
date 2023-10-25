"use client"
import CardSeries from '@/app/components/cards/CardSeries';
import Loading from '@/app/components/loading/Loading';
import Pagination from '@/app/components/pagination/Pagination';
import { dataSeriesMarvel } from '@/app/db/dataMarvel';
import useSeries from '@/app/hooks/useSeries';

interface ISearchParams {
    searchParams: { [key: string]: string | string[] | undefined };
} 

export default function MarvelSeries({ searchParams }: ISearchParams) {
    const page = searchParams['page'] ?? '1';
    const per_page = searchParams['per_page'] ?? '10';
    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page);
    
    const {seriesQueries: SeriesMarvel} = useSeries(dataSeriesMarvel);
    const series = SeriesMarvel.data.slice(start, end);
    const title = 'Séries - Marvel';

    if (SeriesMarvel.loading) return <Loading />;

    return (
        <div className='pt-24 pb-28'>
            <div className='flex items-center justify-between mx-5 mb-4'>
                <h1 className='text-2xl'>{title}</h1>
                <Pagination 
                    hasNextPage={end < SeriesMarvel.data.length}
                    hasPrevPage={start > 0} 
                    link='marvel/series'
                    perPage='10'
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

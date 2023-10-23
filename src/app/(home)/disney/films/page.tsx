"use client"
import CardFilms from '@/app/components/cards/CardFilms';
import Pagination from '@/app/components/pagination/Pagination';
import { dataFilmsDisney } from '@/app/db/dataDisney';
import useFilms from '@/app/hooks/useFilms';

interface ISearchParams {
    searchParams: { [key: string]: string | string[] | undefined }
} 

export default function DisneyFilms({ searchParams }: ISearchParams) {
    const page = searchParams['page'] ?? '1';
    const per_page = searchParams['per_page'] ?? '12';
    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page);

    const {filmsList: FilmsDisney} = useFilms(dataFilmsDisney);
    const films = FilmsDisney.slice(start, end);
    const title = "Films Disney";

    return (
        <div className='pt-24 pb-28'>
            <div className='flex items-center justify-between mx-5 mb-4'>
                <h1 className='text-2xl'>{title}</h1>
                <Pagination 
                    hasNextPage={end < FilmsDisney.length}
                    hasPrevPage={start > 0} 
                    link='disney/films'
                    perPage="12"
                    />
            </div>
            <div className='flex flex-wrap justify-center'>
                {films.map((film) => film &&
                <div key={film.id} className='m-3 w-48'>
                    <CardFilms dataFilms={film} />
                </div>
                )}
            </div>
        </div>
    )
}

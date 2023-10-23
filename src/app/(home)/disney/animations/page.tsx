"use client"
import CardFilms from '@/app/components/cards/CardFilms';
import Pagination from '@/app/components/pagination/Pagination';
import { dataAnimationsDisney } from '@/app/db/dataDisney';
import useFilms from '@/app/hooks/useFilms';

interface ISearchParams {
    searchParams: { [key: string]: string | string[] | undefined }
} 

export default function DisneyPixarAnim({ searchParams }: ISearchParams) {
    const page = searchParams['page'] ?? '1';
    const per_page = searchParams['per_page'] ?? '12';
    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page);

    const {filmsList: AnimationsDisney} = useFilms(dataAnimationsDisney);
    const animations = AnimationsDisney.slice(start, end);
    const title = "Films d'animation Disney - Pixar";

    return (
        <div className='pt-24 pb-28'>
            <div className='flex items-center justify-between mx-5 mb-4'>
                <h1 className='text-2xl'>{title}</h1>
                <Pagination 
                    hasNextPage={end < AnimationsDisney.length}
                    hasPrevPage={start > 0} 
                    link='disney/animations'
                    perPage="12"
                    />
            </div>
            <div className='flex flex-wrap justify-center'>
                {animations.map((animation) => animation &&
                <div key={animation.id} className='m-3 w-48'>
                    <CardFilms dataFilms={animation} />
                </div>
                )}
            </div>
        </div>
    )
}

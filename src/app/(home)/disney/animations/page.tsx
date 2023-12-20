"use client"
import CardFilms from '@/app/components/cards/CardFilms';
import Loading from '@/app/components/loading/Loading';
import Pagination from '@/app/components/pagination/Pagination';
import { dataAnimationsDisney } from '@/app/db/dataDisney';
import useFilms from '@/app/hooks/useFilms';
import Image from 'next/image';
import { useState } from 'react';

interface ISearchParams {
    searchParams: { [key: string]: string | string[] | undefined };
} 

export default function DisneyPixarAnim({ searchParams }: ISearchParams) {
    const page = searchParams['page'] ?? '1';
    const per_page = searchParams['per_page'] ?? '12';
    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page);
    const [order, setOrder] = useState(false);

    const {filmsQueries: AnimationsDisney} = useFilms(dataAnimationsDisney);
    const animations = order === true ? AnimationsDisney.sortAsc.slice(start, end) : AnimationsDisney.sortDesc.slice(start, end);
    const title = "Films d'animation - Disney / Pixar";

    if (AnimationsDisney.loading) return <Loading />;

    return (
        <div className='pt-24 pb-28'>
            <div className='flex items-center justify-between mx-5 mb-4'>
                <h1 className='text-2xl mr-5'>{title}</h1>
                <Pagination 
                    hasNextPage={end < AnimationsDisney.data.length}
                    hasPrevPage={start > 0} 
                    link='disney/animations'
                    perPage='12'
                    />
            </div>
            <div className='flex mx-5 mb-4'>
                <span className='mr-5'>Trier par date</span>
                <button  onClick={() => setOrder(!order)}><Image src={'/images/up_down.png'} alt={''} width={25} height={25} /></button>
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

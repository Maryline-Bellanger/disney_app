"use client"
import CardFilms from '@/app/components/cards/CardFilms';
import Loading from '@/app/components/loading/Loading';
import Pagination from '@/app/components/pagination/Pagination';
import { dataFilmsMarvel } from '@/app/db/dataMarvel';
import useFilms from '@/app/hooks/useFilms';
import Image from 'next/image';
import { useState } from 'react';

interface ISearchParams {
    searchParams: { [key: string]: string | string[] | undefined };
} 

export default function MarvelFilms({ searchParams }: ISearchParams) {
    const page = searchParams['page'] ?? '1';
    const per_page = searchParams['per_page'] ?? '10';
    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page);
    const [order, setOrder] = useState(false);
    
    const {filmsQueries: FilmsMarvel} = useFilms(dataFilmsMarvel)
    const films = order === true ? FilmsMarvel.sortAsc.slice(start, end) : FilmsMarvel.sortDesc.slice(start, end);
    const title = 'Films - Marvel'

    if (FilmsMarvel.loading) return <Loading />;

    return (
        <div className='pt-24 pb-28'>
            <div className='flex items-center justify-between mx-5 mb-4'>
                <h1 className='text-2xl'>{title}</h1>
                <Pagination 
                    hasNextPage={end < FilmsMarvel.data.length}
                    hasPrevPage={start > 0} 
                    link='marvel/films'
                    perPage='10'
                    />
            </div>
            <div className='flex mx-5 mb-4'>
                <span className='mr-5'>Trier par date</span>
                <button  onClick={() => setOrder(!order)}><Image src={'/images/up_down.png'} alt={''} width={25} height={25} /></button>
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

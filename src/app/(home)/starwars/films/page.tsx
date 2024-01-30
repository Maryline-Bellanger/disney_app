"use client"
import CardFilms from '@/app/components/cards/CardFilms';
import Loading from '@/app/components/loading/Loading';
import { Films } from '@/app/types/definitions';
import useFilms from '@/app/hooks/useFilms';
import Image from 'next/image';
import { useEffect, useState } from 'react';


export default function StarwarsFilms() {
    const [order, setOrder] = useState(false);
    const [filmsStarwars, setFilmsStarwars] = useState<Films[]>([]);

    const getData = async () => {
        await fetch('/api/starwars/films')
        .then( res => res.json() )
        .then( data => {
            setFilmsStarwars(data.data.rows);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    const dataStarwars = filmsStarwars.map((film) => film.tmdb_id);
    const {filmsQueries: DataFilmsStarwars} = useFilms(dataStarwars);
    const films = order === true ? DataFilmsStarwars.sortAsc : DataFilmsStarwars.sortDesc;
    const title = 'Films - Starwars';

    if (DataFilmsStarwars.loading) return <Loading />;

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
                {films.map((film) => film &&
                    <div key={film.id} className='m-3 w-48'>
                        <CardFilms dataFilms={film} />
                    </div>
                )}
            </div>
        </div>
    )
}

"use client"
import CardFilms from '@/app/components/cards/CardFilms';
import { dataFilmsStarwars } from '@/app/db/dataStarwars';
import useFilms from '@/app/hooks/useFilms';

export default function StarwarsFilms() {
    const {filmsList: FilmsStarwars} = useFilms(dataFilmsStarwars);
    const title = 'Films - Starwars';

    return (
        <div className='pt-24 pb-28'>
            <div className='flex items-center justify-between mx-5 mb-4'>
                <h1 className='text-2xl'>{title}</h1>
            </div>
            <div className='flex flex-wrap justify-center'>
                {FilmsStarwars.map((film) => film &&
                    <div key={film.id} className='m-3 w-48'>
                        <CardFilms dataFilms={film} />
                    </div>
                )}
            </div>
        </div>
    )
}

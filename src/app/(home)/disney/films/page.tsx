"use client"
import CardFilms from '@/app/components/cards/CardFilms';
import { dataFilmsDisney } from '@/app/db/dataDisney';
import useFilms from '@/app/hooks/useFilms';

export default function DisneyFilms() {
    const {filmsList: FilmsDisney} = useFilms(dataFilmsDisney);
    const title = "Films Disney";

    return (
        <div className='pt-24 pb-28'>
            <div className='flex items-center justify-between mx-5 mb-4'>
                <h1 className='text-2xl'>{title}</h1>
            </div>
            <div className='flex flex-wrap justify-center'>
                {FilmsDisney.map((film) => film &&
                <div key={film.id} className='m-3 w-48'>
                    <CardFilms dataFilms={film} />
                </div>
                )}
            </div>
        </div>
    )
}

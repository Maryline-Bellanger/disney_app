"use client"
import CardFilms from '@/app/components/cards/CardFilms';
import { dataAnimationsDisney } from '@/app/db/dataDisney';
import useFilms from '@/app/hooks/useFilms';


export default function DisneyPixarAnim() {
    const {filmsList: AnimationsDisney} = useFilms(dataAnimationsDisney);
    const title = "Films d'animation Disney - Pixar";

    return (
        <div className='pt-24 pb-28'>
            <div className='flex items-center justify-between mx-5 mb-4'>
                <h1 className='text-2xl'>{title}</h1>
            </div>
            <div className='flex flex-wrap justify-center'>
                {AnimationsDisney.map((animation) => animation &&
                <div key={animation.id} className='m-3 w-48'>
                    <CardFilms dataFilms={animation} />
                </div>
                )}
            </div>
        </div>
    )
}

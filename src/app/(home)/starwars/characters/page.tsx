"use client"
import CardCharacters from '@/app/components/cards/CardCharacters';
import Pagination from '@/app/components/pagination/Pagination';
import { Characters } from '@/app/types/definitions';
import { useEffect, useState } from 'react';

interface ISearchParams {
    searchParams: { [key: string]: string | string[] | undefined };
} 

export default function StarwarsCharacters({ searchParams }: ISearchParams) {
    const page = searchParams['page'] ?? '1';
    const per_page = searchParams['per_page'] ?? '12';
    const start = (Number(page) - 1) * Number(per_page);
    const end = start + Number(per_page);
    const [charactersStarwars, setCharactersStarwars] = useState<Characters[]>([]);

    const getData = async () => {
        await fetch('/api/starwars/characters')
        .then( res => res.json() )
        .then( data => {
            setCharactersStarwars(data.data.rows);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    const characters = charactersStarwars.slice(start, end);
    const title = "Personnages - Starwars";
    
    return (
    <div className='pt-24 pb-28'>
        <div className='flex items-center justify-between mx-5 mb-4'>
            <h1 className='text-2xl'>{title}</h1>
            <Pagination 
            hasNextPage={end < charactersStarwars.length}
            hasPrevPage={start > 0} 
            link='starwars/characters'
            perPage='12'
            />
        </div>
        <div className='flex flex-wrap justify-center'>
            {characters.map((people) => 
                <div key={people.tmdb_id}>
                    <CardCharacters 
                        id={people.tmdb_id} 
                        image={people.profil_path}
                        name={people.name}
                        character={people.character}
                    />
                </div>
            )}
        </div>
    </div>
  )
}

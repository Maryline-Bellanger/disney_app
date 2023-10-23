import CardCharacters from '@/app/components/cards/CardCharacters';
import { dataCharactersStarwars } from '@/app/db/dataStarwars';

export default function StarwarsCharacters() {
    const title = "Interprètes Starwars"
    return (
    <div className='pt-24 pb-28'>
        <div className='flex items-center justify-between mx-5 mb-4'>
                <h1 className='text-2xl'>{title}</h1>
            </div>
        <div className='flex flex-wrap justify-center'>
                {dataCharactersStarwars.map((people) => 
                <div key={people.id}>
                    <CardCharacters 
                        id={people.id} 
                        image={people.profil_path}
                        name={people.name}
                        character={people.character}
                    />
                </div>
                )
                }
            </div>
    </div>
  )
}

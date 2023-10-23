import { imageBaseUrl } from '@/app/utils/imageBaseUrl';
import Image from 'next/image';

interface ICardCharacter {
    id: number,
    image: string,
    name: string,
    character: string,
}

export default function CardCharacters({ id, image, name, character}: ICardCharacter) {
    return (
        <div key={id} className='card w-48 bg-base-100 shadow-xl m-3'>
            <Image src={imageBaseUrl + image} alt={name} width={200} height={300} />
            <div className='text-black text-center my-2'>
                <h1 className='text-base font-semibold mx-1'>{name}</h1>
                <p className='text-sm'>{character}</p>
            </div>
        </div>
    )
}

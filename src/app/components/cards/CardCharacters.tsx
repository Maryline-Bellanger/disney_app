import { imageBaseUrl } from '@/app/utils/imageBaseUrl';
import Image from 'next/image';
import { useState } from 'react';

interface ICardCharacter {
    id: number;
    image: string;
    name: string;
    character: string;
}

export default function CardCharacters({ id, image, name, character}: ICardCharacter) {
    const [imgSrc, setImgSrc] = useState(imageBaseUrl + image);
    return (
        <div key={id} className='card w-48 bg-base-100 shadow-xl m-3'>
            <Image src={imgSrc} alt={name} width={200} height={300} onError={() => setImgSrc("/images/image_not_found.png")} />
            <div className='text-black text-center my-2'>
                <h1 className='text-base font-semibold mx-1'>{name}</h1>
                <p className='text-sm'>{character}</p>
            </div>
        </div>
    )
}

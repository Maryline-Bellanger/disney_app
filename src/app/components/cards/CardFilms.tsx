import { FilmsData } from '@/app/types/filmsType';
import { imageBaseUrl } from '@/app/utils/imageBaseUrl';
import Image from 'next/image';
import { useState } from 'react';
import CardModalFilms from './CardModalFilms';

interface IDataFilmsProps {
    dataFilms: FilmsData | undefined;
}

export default function CardFilms({ dataFilms }: IDataFilmsProps) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='hover:cursor-pointer' onClick={() => setShowModal(true)}>
                <Image src={imageBaseUrl + dataFilms?.poster_path} alt={''} width={200} height={300} priority={true} />
            </div>
            <CardModalFilms dataFilms={dataFilms} isVisible={showModal} onClose={() => setShowModal(false)} />
        </>
    )
}

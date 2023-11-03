import { SeriesData } from '@/app/types/seriesType';
import { imageBaseUrl } from '@/app/utils/imageBaseUrl';
import Image from 'next/image';
import { useState } from 'react';
import CardModalSeries from './CardModalSeries';

interface IDataSeriesProps {
    dataSeries: SeriesData | undefined;
}

export default function CardSeries({ dataSeries }: IDataSeriesProps) {
    const [showModal, setShowModal] = useState(false);
    const [imgSrc, setImgSrc] = useState(imageBaseUrl + dataSeries?.poster_path);
    
    return (
        <>
            <div className='hover:cursor-pointer' onClick={() => setShowModal(true)}>
                <Image src={imgSrc} alt={''} width={200} height={300} priority={true} onError={() => setImgSrc("/images/image_not_found.png")} />
            </div>
            <CardModalSeries dataSeries={dataSeries} isVisible={showModal} onClose={() => setShowModal(false)} />
        </>
    )
}

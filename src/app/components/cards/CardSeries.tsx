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
    
    return (
        <>
            <div className='hover:cursor-pointer' onClick={() => setShowModal(true)}>
                <Image src={imageBaseUrl + dataSeries?.poster_path} alt={''} width={200} height={300} priority={true} />
            </div>
            <CardModalSeries dataSeries={dataSeries} isVisible={showModal} onClose={() => setShowModal(false)} />
        </>
    )
}

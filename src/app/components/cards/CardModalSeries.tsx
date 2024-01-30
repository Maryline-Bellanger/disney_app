import { SeriesData } from "@/app/types/seriesType";
import { imageBaseUrl } from "@/app/utils/imageBaseUrl";
import Image from 'next/image';

interface IModalSeriesProps {
    dataSeries: SeriesData | undefined;
    isVisible: boolean;
    onClose: any;
}

export default function CardModalSeries({ dataSeries, isVisible, onClose }: IModalSeriesProps) {
    const firstDate = dataSeries?.first_air_date.split("-")[0];
    const lastDate = dataSeries?.last_air_date.split("-")[0];
    const yearOfAirDate = firstDate !== lastDate ? (`${firstDate} - ${lastDate}`) : (`${firstDate}`)
    
    return (
        <>
            {isVisible ? 
                <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur flex justify-center items-center'>
                    <div className="card w-80 sm:w-2/5 glass bg-black overflow-y-auto h-2/3">
                        <div className='card-actions justify-end'>
                            <button className='text-xl my-2 mr-3' onClick={() => onClose()}>X</button>
                        </div>
                        <figure>
                            <Image src={imageBaseUrl + dataSeries?.backdrop_path} alt={''} width={600} height={500} />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">{dataSeries?.name} ({yearOfAirDate})</h2>
                            <div className='flex flex-row'>
                                <p className='grow-0'>{dataSeries?.number_of_seasons && dataSeries?.number_of_seasons > 1 ? `${dataSeries?.number_of_seasons} saisons` : `${dataSeries?.number_of_seasons} saison`}
                                    {" - "}
                                    {dataSeries?.number_of_episodes && dataSeries?.number_of_episodes > 1 ? `${dataSeries?.number_of_episodes} épisodes` : `${dataSeries?.number_of_episodes} épisode`} 
                                    <span className="text-xs"> 🔸 </span>
                                    {dataSeries?.genres && dataSeries?.genres.map((genre) => genre.name).join(", ")}
                                </p>
                            </div>
                            <div className="mt-5">{dataSeries?.overview}</div>
                        </div>
                    </div>
                </div>
                : ""}
        </>
    )
}

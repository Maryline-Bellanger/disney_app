import { FilmsData } from "@/app/types/filmsType";
import { imageBaseUrl } from "@/app/utils/imageBaseUrl";
import Image from 'next/image';

interface IModalFilmsProps {
    dataFilms: FilmsData | undefined;
    isVisible: boolean;
    onClose: any;
}

export default function CardModalFilms({ dataFilms, isVisible, onClose }: IModalFilmsProps) {
    return (
        <>{isVisible ? 
            <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur flex justify-center items-center'>
                <div className="card w-80 sm:w-2/5 glass bg-black overflow-y-auto h-2/3">
                    <div className='card-actions justify-end'>
                        <button className='text-xl my-2 mr-3' onClick={() => onClose()}>X</button>
                    </div>
                    <figure>
                        <Image src={imageBaseUrl + dataFilms?.backdrop_path} alt={''} width={600} height={500} />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">{dataFilms?.title}</h2>
                        <div className='flex flex-row'>
                            <p className='grow-0'>{dataFilms?.release_date &&
                                dataFilms?.release_date.split("-").reverse().join("/")}
                                <span className="text-xs"> 🔸 </span>
                                {dataFilms?.genres && dataFilms?.genres.map((genre) => genre.name).join(", ")}
                                <span className="text-xs"> 🔸 </span>
                                {dataFilms?.runtime && `${Math.floor(dataFilms?.runtime / 60)} h ${dataFilms.runtime % 60} min`}
                            </p>
                        </div>
                        <div className="mt-5">{dataFilms?.overview}</div>
                    </div>
                </div>
            </div>
            : ""}
        </>
    )
}

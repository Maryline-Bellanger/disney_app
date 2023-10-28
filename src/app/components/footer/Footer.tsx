import Image from 'next/image';

export default function Footer() {
    const textFooterTmdb = "Ce produit utilise l'API TMDB mais n'est ni approuvé ni certifié par TMDB.";
    const textFooterAuthor = "En savoir plus sur l'auteur"
    return (
        <footer className='fixed bottom-0 left-0 z-20 w-full bg-cyan-950 py-2'>
            <div className=''>
                <div className='flex flex-col lg:flex-row justify-center items-center'>
                    <Image src='/images/tmdb_logo.svg' alt='Logo The Movie db' width={90} height={50} />
                    <p className='text-sm lg:pl-2 py-2 text-center'>{textFooterTmdb}</p>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <p className='text-sm pr-2'>{textFooterAuthor}</p>
                    <a target='_blank' href={process.env.NEXT_PUBLIC_LINKEDIN}>
                        <Image src='/images/linkedin_logo.png' alt='Logo linkedin' width={22} height={22} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

import Image from 'next/image';

export default function Footer() {
    const textFooter = "Ce produit utilise l'API TMDB mais n'est ni approuvé ni certifié par TMDB.";
    return (
        <footer className='fixed bottom-0 left-0 z-20 w-full bg-cyan-950'>
            <div className='flex flex-col justify-center items-center p-4'>
                <Image src='/images/tmdb_logo.svg' alt='Logo The Movie db' width={100} height={50} />
                <p className='pt-3 text-center'>{textFooter}</p>
            </div>
        </footer>
    )
}

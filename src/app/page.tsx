import Link from 'next/link';
import Image from 'next/image';
import DisneyPixarLogo from '../../public/images/disney_pixar_logo.png';
import MarvelLogo from '../../public/images/marvel_logo.png';
import StarwarsLogo from '../../public/images/starwars_logo.png';

export default function Home() {
  return (
        <div className='pb-24 min-h-screen max-h-full flex flex-wrap justify-evenly items-center'>
            <div>
                <Link href={'/disney/animations'}>
                    <Image src={DisneyPixarLogo} alt="Lien vers disney-pixar" width={290} height={200} />
                </Link>
            </div>
            <div>
                <Link href={'/marvel/films'}>
                    <Image src={MarvelLogo} alt="Lien vers marvel" width={300} height={200} />
                </Link>
            </div>
            <div>
                <Link href={'/starwars/films'}>
                    <Image src={StarwarsLogo} alt="Lien vers starwars" width={300} height={200} />
                </Link>
            </div>
        </div>
    )
}

"use client"
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='grid grid-cols-1 h-screen justify-items-center content-center'>
        <Image src={'/images/not_found.png'} alt={''} width={400} height={500} />
        <h1 className='text-cyan-400 text-base lg:text-2xl mt-4 text-center'>Oops ! Cette page est introuvable.</h1>
            <button className='bg-cyan-400 px-4 py-1 rounded-3xl mt-5 text-sm lg:text-lg text-stone-900'><Link href={'/'}>Accueil</Link></button>
    </div>
  )
}

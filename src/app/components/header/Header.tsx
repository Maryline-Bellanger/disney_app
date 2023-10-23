import Image from 'next/image';
import Link from 'next/link';
import { menuList } from './components/menuList';
import NavbarItem from './components/NavbarItem';
import NavSubMenu from './components/NavSubMenu';

export default function Header() {
    return (
        <header className='fixed top-0 left-0 z-20 w-full bg-cyan-950'>
            <nav className='flex items-center justify-between p-2'>
            <Link href={'/'}>
                <Image src='/images/disney_logo.png' alt={''} width={100} height={50} />
            </Link>
                <div className='lg:hidden group w-40 flex justify-end'>
                    <button tabIndex={0}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </button>
                    <div tabIndex={0} className='hidden absolute group-hover:block pt-6 top-12 right-0 bg-cyan-950'>
                        {menuList.map((menu, index) => (
                            <div key={index} className='px-5'>
                                <NavbarItem label={menu.label} />
                                <div className='pl-3'>
                                    <NavSubMenu items={menu.subMenu} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='hidden lg:flex  mr-16'>
                    {menuList.map((menu, index) => (
                        <div key={index} className='group px-5'>
                            <NavbarItem
                                label={menu.label}
                            />
                            <div className="hidden absolute group-hover:block bg-cyan-950 w-40">
                                <NavSubMenu items={menu.subMenu} />
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    )
}

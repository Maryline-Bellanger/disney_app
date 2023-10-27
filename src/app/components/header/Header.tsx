import Image from 'next/image';
import Link from 'next/link';
import { menuList } from './components/menuList';
import NavbarItem from './components/NavbarItem';
import NavSubMenu from './components/NavSubMenu';

export default function Header() {
    const onClose = false;

    return (
        <header className='navbar fixed top-0 left-0 z-20 bg-cyan-950 w-full justify-between'>
            <div className='ml-2'>
                <Link href={'/'}>
                    <Image src='/images/disney_logo.png' alt='Logo disney' width={100} height={50} />
                </Link>
            </div>
            <div className='dropdown dropdown-end' tabIndex={0}>
                <button className='btn btn-ghost lg:hidden' tabIndex={0}>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /></svg>
                </button>
                <div className='menu menu-sm dropdown-content mt-3 z-[1] shadow bg-cyan-950 rounded-box w-52'>
                    {menuList.map((menu, index) => (
                        <div key={index} className='px-5'>
                            <NavbarItem label={menu.label} />
                            <div className='pl-2 pb-1'>
                                <NavSubMenu items={menu.subMenu} onClose={onClose} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='hidden lg:flex mr-12'>
                <div className='flex flex-row px-1'>
                {menuList.map((menu, index) => (
                    <div key={index} className='group px-5'>
                        <NavbarItem
                            label={menu.label}
                        />
                        <div className='hidden absolute group-hover:block bg-cyan-950 w-40 rounded-2xl pt-1'>
                            <NavSubMenu items={menu.subMenu} onClose={onClose} />
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </header>
    )
}

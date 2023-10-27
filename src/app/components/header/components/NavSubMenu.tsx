import { ISubMenuItem } from '@/app/types/navbar';
import Link from 'next/link';

interface INavSubMenuProps {
    items: ISubMenuItem[];
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavSubMenu({ items, setIsOpen }: INavSubMenuProps) {
    return (
        <div>{items.map((item, index) => (
            <div key={index} className='hover:text-cyan-400 hover:font-semibold rounded-2xl'>
                <a href={item.link} onClick={() => setIsOpen(true)}>
                    <p className='px-2 py-1'>{item.label}</p>
                </a>
            </div>))}
        </div>
    )
}

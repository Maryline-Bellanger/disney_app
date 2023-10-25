import { ISubMenuItem } from '@/app/types/navbar';
import Link from 'next/link';

interface INavSubMenuProps {
    items: ISubMenuItem[];
}

export default function NavSubMenu({ items }: INavSubMenuProps) {
    return (
        <div>{items.map((item, index) => (
            <div key={index} className='hover:text-cyan-400 hover:font-semibold rounded-2xl'>
                <Link href={item.link}>
                    <p className='px-2 py-1'>{item.label}</p>
                </Link>
            </div>))}
        </div>
    )
}

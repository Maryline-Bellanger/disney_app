import { ISubMenuItem } from '@/app/types/navbar';

interface INavSubMenuProps {
    items: ISubMenuItem[];
    onClose: any;
}

export default function NavSubMenu({ items, onClose }: INavSubMenuProps) {
    return (
        <div>{items.map((item, index) => (
            <div key={index} className='hover:text-cyan-400 hover:font-semibold rounded-2xl'>
                <a href={item.link} onClick={onClose}>
                    <p className='px-2 py-1'>{item.label}</p>
                </a>
            </div>))}
        </div>
    )
}

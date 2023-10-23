import { ISubMenuItem } from "@/app/types/navbar"
import Link from "next/link";

interface INavSubMenuProps {
    items: ISubMenuItem[];
}

export default function NavSubMenu({ items }: INavSubMenuProps) {
  return (
    <div>{items.map((item, index) => (
        <div key={index} className="hover:bg-cyan-800">
        <Link href={item.link}>
            <p className="p-2 ">{item.label}</p>
        </Link>
        </div>
    ))}</div>
  )
}

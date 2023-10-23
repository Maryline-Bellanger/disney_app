interface INavbarItemProps {
    label: string;
}

export default function NavbarItem({ label }: INavbarItemProps) {
  return (
    <div className="text-xl font-semibold">{label}</div>
  )
}

export interface ISubMenuItem {
    label: string;
    link: string;
}

export interface IMenuItem {
    label: string;
    subMenu: ISubMenuItem[];
}
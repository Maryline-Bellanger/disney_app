import { IMenuItem } from "@/app/types/navbar"

export const menuList: IMenuItem[] = [
    {
        label: "Disney - Pixar",
        subMenu: [
            {
                label: "Films",
                link: "/disney/films"
            },
            {
                label: "Films d'animation",
                link: "/disney/animations"
            },
            {
                label: "Séries",
                link: "/disney/series"
            }
        ]
    },
    {
        label: "Marvel",
        subMenu: [
            {
                label: "Films",
                link: "/marvel/films"
            },
            {
                label: "Séries",
                link: "/marvel/series"
            }
        ]
    },
    {
        label: "Star wars",
        subMenu: [
            {
                label: "Films",
                link: "/starwars/films"
            },
            {
                label: "Séries",
                link: "/starwars/series"
            },
            {
                label: "Personnages",
                link: "/starwars/characters"
            }
        ]
    }
]
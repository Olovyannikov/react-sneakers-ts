import {ReactComponent as HeartIcon} from './img/heart.svg';
import {ReactComponent as ProfileIcon} from './img/profile.svg';
import {ReactNode} from "react";

interface DataModel {
    id: number;
    title: string;
    icon: ReactNode;
    link: string;
}

export const data: DataModel[] = [
    {
        id: 0,
        title: 'like',
        icon: <HeartIcon/>,
        link: '/favorites'
    },
    {
        id: 1,
        title: 'cabinet',
        icon: <ProfileIcon/>,
        link: '/cabinet'
    },
]
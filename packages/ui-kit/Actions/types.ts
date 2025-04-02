import {Icon as IconType} from '../Icon/types';

export enum ActionsDisplay {
    LEFT = 'left',
    RIGHT = 'right',
}

export interface ActionsType {
    id: string | number;
    text: string;
    icon: IconType;
}
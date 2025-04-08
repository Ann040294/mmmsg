import { Icon as IconType } from '../Icon/types';

export enum ActionsDisplay {
    LEFT = 'left',
    RIGHT = 'right',
}

export interface ActionItem {
    id: string | number;
    text: string;
    icon: IconType;
    onClick?: () => void;
}
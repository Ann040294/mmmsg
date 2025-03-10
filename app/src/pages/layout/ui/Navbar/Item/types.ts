import { lazy, MouseEvent } from 'react';

import { Icon as IconType } from 'ui-kit/Icon/types';

const Avatar = lazy(() => import('ui-kit/Avatar/Avatar'));
const CircleButton = lazy(() => import('ui-kit/CircleButton/CircleButton'));

export enum NavbarItemTypes {
    AVATAR = 'Avatar',
    BUTTON_CIRCLE = 'ButtonCircle',
}

export const NavbarItemTypesMap = {
    [NavbarItemTypes.AVATAR]: Avatar,
    [NavbarItemTypes.BUTTON_CIRCLE]: CircleButton,
};

type BaseNavLinkType = {
    name: string;
    path: string;
    type: NavbarItemTypes;
    isHidden?: boolean;
};

type AvatarNavLinkType = {
    type: NavbarItemTypes.AVATAR;
    className?: string;
    src?: string;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
};

type ButtonCircleNavLinkType = {
    type: NavbarItemTypes.BUTTON_CIRCLE;
    icon: IconType;
    className?: string;
    label?: string;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
};

export type NavLinkType = BaseNavLinkType &
    (AvatarNavLinkType | ButtonCircleNavLinkType);

type DeleteType<T> = Partial<Omit<T, 'type'>>;

export type NavLinkTypeExtend = BaseNavLinkType &
    DeleteType<AvatarNavLinkType> &
    DeleteType<ButtonCircleNavLinkType>;

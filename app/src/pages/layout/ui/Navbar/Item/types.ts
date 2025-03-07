import { MouseEvent } from 'react';

import Avatar from 'ui-kit/Avatar/Avatar';
import { CircleButton } from 'ui-kit/CircleButton';
import { Icon as IconType } from 'ui-kit/Icon/types';

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
    onClick?: (event: MouseEvent<HTMLImageElement>) => void;
};

type ButtonCircleNavLinkType = {
    type: NavbarItemTypes.BUTTON_CIRCLE;
    icon: IconType
    className?: string;
    label?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

export type NavLinkType = BaseNavLinkType & (AvatarNavLinkType | ButtonCircleNavLinkType);

type DeleteType<T> = Partial<Omit<T, 'type'>>;

export type NavLinkTypeExtend = BaseNavLinkType & DeleteType<AvatarNavLinkType> & DeleteType<ButtonCircleNavLinkType>;

import { MouseEvent } from 'react';

import Avatar from 'ui-kit/Avatar/Avatar';

export enum NavbarItemTypes {
    AVATAR = 'Avatar',
    BUTTON_CIRCLE = 'ButtonCircle',
}

export const NavbarItemTypesMap = {
    [NavbarItemTypes.AVATAR]: Avatar,
    [NavbarItemTypes.BUTTON_CIRCLE]: Avatar, //TODO: Поменять на ButtonCircle
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
    type: NavbarItemTypes.BUTTON_CIRCLE; //TODO: Дополнить, когда появится ButtonCircle
};

export type NavLinkType = BaseNavLinkType & (AvatarNavLinkType | ButtonCircleNavLinkType);

type DeleteType<T> = Partial<Omit<T, 'type'>>;

export type NavLinkTypeExtend = BaseNavLinkType & DeleteType<AvatarNavLinkType> & DeleteType<ButtonCircleNavLinkType>;

import { FC } from 'react';

import Avatar from 'ui-kit/Avatar/Avatar';

export enum NavbarItemTypes {
    AVATAR = 'Avatar',
    BUTTON_CIRCLE = 'ButtonCircle',
}

export const NavbarItemTypesMap: Readonly<Record<NavbarItemTypes, FC>> = {
    [NavbarItemTypes.AVATAR]: Avatar,
    [NavbarItemTypes.BUTTON_CIRCLE]: Avatar, //ButtonCircle
};

export type NavLinkType = {
    name: string;
    path: string;
    type: NavbarItemTypes;
    isHidden?: boolean;
};

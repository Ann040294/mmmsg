import { ROUTE_CONFIG } from '@shared/config/routeConfig';

import { NavbarItemTypes, NavLinkType } from './Item/types';

export const optionsNavbar: NavLinkType[] = [
    {
        path: ROUTE_CONFIG.HOME.path,
        name: ROUTE_CONFIG.HOME.title,
        type: NavbarItemTypes.AVATAR,
    },
    {
        path: ROUTE_CONFIG.PROFILE.path,
        name: ROUTE_CONFIG.PROFILE.title,
        type: NavbarItemTypes.AVATAR,
    },
    {
        path: ROUTE_CONFIG.LOGOUT.path,
        name: ROUTE_CONFIG.LOGOUT.title,
        type: NavbarItemTypes.AVATAR,
    },
];

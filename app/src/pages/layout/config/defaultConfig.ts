import LogoutOutlined from '@ant-design/icons/LogoutOutlined';
import MessageOutlined from '@ant-design/icons/MessageOutlined';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';

import { NavbarItemTypes, NavLinkType } from '../ui/Navbar/Item/types';

export const defaultConfig: NavLinkType[][] = [
    [
        {
            path: ROUTE_CONFIG.HOME.path,
            name: ROUTE_CONFIG.HOME.title,
            type: NavbarItemTypes.BUTTON_CIRCLE,
            icon: MessageOutlined,
            label: ROUTE_CONFIG.HOME.title,
        },
    ],
    [
        {
            path: ROUTE_CONFIG.PROFILE.path,
            name: ROUTE_CONFIG.PROFILE.title,
            type: NavbarItemTypes.AVATAR,
        },
        {
            path: ROUTE_CONFIG.LOGOUT.path,
            name: ROUTE_CONFIG.LOGOUT.title,
            type: NavbarItemTypes.BUTTON_CIRCLE,
            icon: LogoutOutlined,
            label: ROUTE_CONFIG.LOGOUT.title,
        },
    ],
];

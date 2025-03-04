import { FC } from 'react';
import { NavLink } from 'react-router';

import { NavbarItemTypesMap, NavLinkType } from './types';

const NavbarItem: FC<NavLinkType> = (props) => {
    const Component = NavbarItemTypesMap[props.type];

    if (props.isHidden) {
        return null;
    }

    return (
        <NavLink to={props.path}>
            <Component />
            <span>{props.name}</span>
        </NavLink>
    );
};

export default NavbarItem;

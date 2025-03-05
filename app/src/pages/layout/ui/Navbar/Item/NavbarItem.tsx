import { FC } from 'react';
import { NavLink } from 'react-router';

import { NavbarItemTypesMap, NavLinkTypeExtend } from './types';

const NavbarItem: FC<NavLinkTypeExtend> = (props) => {
    const { path, name, isHidden, type, ...componentProps } = props;

    const Component = NavbarItemTypesMap[type];

    if (isHidden) {
        return null;
    }

    return (
        <NavLink
            to={path}
            title={name}
        >
            <Component {...componentProps} />
        </NavLink>
    );
};

export default NavbarItem;

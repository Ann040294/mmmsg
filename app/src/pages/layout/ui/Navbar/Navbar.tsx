import { FC } from 'react';
import { NavLink } from 'react-router';

import { NavbarItemTypesMap, NavLinkType } from './types';

import css from './Navbar.module.scss';

interface NavbarProps {
    options: NavLinkType[];
}

const Navbar: FC<NavbarProps> = (props) => {

    return (
        <nav className={css.root}>
            {props.options.map((item) => {
                const Component = NavbarItemTypesMap[item.type];

                return (
                    <>
                        {!item.isHidden && (
                            <NavLink
                                key={item.path}
                                to={item.path}
                            >
                                <Component />
                                <span>{item.name}</span>
                            </NavLink>
                        )}
                    </>
                );
            })}
        </nav>
    );
};

export default Navbar;

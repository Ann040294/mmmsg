import { FC } from 'react';

import { NavbarItem, NavLinkType } from './Item';

import css from './Navbar.module.scss';

interface NavbarProps {
    options: NavLinkType[];
}

const Navbar: FC<NavbarProps> = (props) => {
    return (
        <nav className={css.root}>
            {props.options.map((item) => (
                <NavbarItem
                    key={item.path}
                    {...item}
                />
            ))}
        </nav>
    );
};

export default Navbar;

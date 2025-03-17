import { FC } from 'react';

import { getKeyFromNavLinkArray } from './utils/getKeyFromNavLinkArray';
import { NavbarItem, NavLinkTypeExtend } from './Item';

import css from './Navbar.module.scss';

interface NavbarProps {
    options: NavLinkTypeExtend[][];
}

const Navbar: FC<NavbarProps> = ({ options }) => {
    return (
        <nav className={css.root}>
            {options.map((option) => (
                <div
                    key={getKeyFromNavLinkArray(option)}
                    className={css.item}
                >
                    {option.map((item) => (
                        <NavbarItem
                            key={item.path}
                            {...item}
                        />
                    ))}
                </div>
            ))}
        </nav>
    );
};

export default Navbar;

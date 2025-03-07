import { FC } from 'react';
import { NavLink, NavLinkRenderProps } from 'react-router';
import cn from 'classnames';
import QuestionCircleOutlined from '@ant-design/icons/QuestionCircleOutlined'

import { NavbarItemTypesMap, NavLinkTypeExtend } from './types';

import css from './NavbarItem.module.scss';

const NavbarItem: FC<NavLinkTypeExtend> = (props) => {
    const { path, name, isHidden, type, ...componentProps } = props;

    const Component = NavbarItemTypesMap[type];

    const classNames = ({ isActive }: NavLinkRenderProps): string => {
        return cn(css.root, { [css.active]: isActive });
    };

    if (isHidden) {
        return null;
    }

    return (
        <NavLink
            to={path}
            title={name}
            className={classNames}
        >
            <Component icon={QuestionCircleOutlined} {...componentProps} />
        </NavLink>
    );
};

export default NavbarItem;

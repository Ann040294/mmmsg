import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, NavLinkRenderProps } from 'react-router';
import cn from 'classnames';
import QuestionCircleOutlined from '@ant-design/icons/QuestionCircleOutlined';

import { NavbarItemTypesMap, NavLinkTypeExtend } from './types';

import css from './NavbarItem.module.scss';

const NavbarItem: FC<NavLinkTypeExtend> = (props) => {
    const { path, name, isHidden, type, ...componentProps } = props;
    const { t } = useTranslation();

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
            title={t(name)}
            className={classNames}
        >
            <Component
                icon={QuestionCircleOutlined}
                {...componentProps}
                label={t(name)}
            />
        </NavLink>
    );
};

export default NavbarItem;

import { FC } from 'react';
import cn from 'classnames';

import { Icon as IconType } from './types';

import css from './Icon.module.scss';

export interface IconProps {
    icon: IconType;
    className?: string;
}

const Icon: FC<IconProps> = ({ icon: IconComponent, className }) => {
    return (
        <span className={cn(css.icon, className)}>
            <IconComponent />
        </span>
    );
};

export default Icon;

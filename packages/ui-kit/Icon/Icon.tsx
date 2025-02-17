import { FC } from 'react';

import { Icon as IconType } from './types';

export interface IconProps {
    icon: IconType;
    className?: string;
}

const Icon: FC<IconProps> = ({ icon, className }) => {
    const Component = icon;
   
    return (
        <span className={className}>
            <Component />
        </span>
    );
};

export default Icon;

import { FC } from 'react';

import { IconItemType } from './types';

interface IconItemProps {
    icon: IconItemType;
    className?: string;
}

const IconItem: FC<IconItemProps> = ({ icon, className }) => {
    const Icon = icon.icon;

    return (
        <Icon
            className={className}
            onClick={icon.onClick}
        />
    );
};

export default IconItem;

import { FC } from 'react';

import IconItem from '@shared/ui/HeaderPage/IconItem/IconItem';
import { IconItemType } from '@shared/ui/HeaderPage/IconItem/types';

import css from './IconItems.module.scss'

interface IconItemsProps {
    options: IconItemType[];
}

const IconItems: FC<IconItemsProps> = ({ options }) => {
    return (
        <div className={css.root}>
            {options.map((item) => (
                <IconItem
                    key={item.id}
                    icon={item.icon}
                />
            ))}
        </div>
    );
};

export default IconItems;

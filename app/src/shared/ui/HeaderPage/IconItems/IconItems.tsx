import { FC } from 'react';

import { IconButton } from 'ui-kit';
import { IconButtonSize } from 'ui-kit/IconButton';

import { IconItemType } from './types';

import css from './IconItems.module.scss';

interface IconItemsProps {
    options: IconItemType[];
}

const IconItems: FC<IconItemsProps> = ({ options }) => {
    return (
        <div className={css.root}>
            {options.map((option) => (
                <IconButton
                    key={option.id}
                    size={IconButtonSize.EXTRA_SMALL}
                    {...option}
                />
            ))}
        </div>
    );
};

export default IconItems;

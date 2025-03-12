import { FC } from 'react';

import { IconButton } from 'ui-kit';
import { IconButtonSize } from 'ui-kit/IconButton';

import { ButtonItemType } from './types';

import css from './ButtonItems.module.scss';

interface ButtonItemsProps {
    options: ButtonItemType[];
}

const ButtonItems: FC<ButtonItemsProps> = ({ options }) => {
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

export default ButtonItems;

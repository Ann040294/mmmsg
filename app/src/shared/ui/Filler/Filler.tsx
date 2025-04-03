import { FC } from 'react';
import cn from 'classnames';
import { t } from 'i18next';
import MessageTwoTone from '@ant-design/icons/MessageTwoTone';

import { Icon } from 'ui-kit';
import { Icon as IconType } from 'ui-kit/Icon/types';

import css from './Filler.module.scss';

interface FillerProps {
    hasGradient?: boolean;
    icon?: IconType;
    description?: string;
    title?: string;
}

const Filler: FC<FillerProps> = ({
    hasGradient,
    icon = MessageTwoTone,
    description = 'filler.description',
    title = 'filler.title',
}) => {
    return (
        <div className={cn(css.root, { [css.gradient]: hasGradient })}>
            <Icon
                icon={icon}
                className={css.icon}
            />
            <h2 className={css.title}>{t(title)}</h2>
            <p className={css.description}>{t(description)}</p>
            <div className={css.fish} />
        </div>
    );
};
export default Filler;

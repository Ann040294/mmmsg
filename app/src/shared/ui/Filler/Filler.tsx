import { FC } from 'react';
import cn from 'classnames';

import { Icon } from 'ui-kit';
import { Icon as IconType } from 'ui-kit/Icon/types';

import css from './Filler.module.scss';
import MessageTwoTone from '@ant-design/icons/MessageTwoTone';
import { t } from 'i18next';

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
            {icon && (
                <Icon
                    icon={icon}
                    className={css.icon}
                />
            )}
            {title && <h2 className={css.title}>{t(title)}</h2>}
            {description && <p className={css.description}>{t(description)}</p>}
            <div className={css.fish} />
        </div>
    );
};
export default Filler;

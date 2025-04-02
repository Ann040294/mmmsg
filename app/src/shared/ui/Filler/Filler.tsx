import { FC } from 'react';
import cn from 'classnames';

import { Icon } from 'ui-kit';
import { Icon as IconType } from 'ui-kit/Icon/types';

import css from './Filler.module.scss';

interface FillerProps {
    hasGradient?: boolean;
    icon?: IconType;
    description?: string;
    title?: string;
}

const Filler: FC<FillerProps> = ({ hasGradient, icon, description, title }) => {
    return (
        <div className={cn(css.root, { [css.gradient]: hasGradient })}>
            {icon && (
                <Icon
                    icon={icon}
                    className={css.icon}
                />
            )}
            {title && <h2 className={css.title}>{title}</h2>}
            {description && <p className={css.description}>{description}</p>}
            <div className={css.fish} />
        </div>
    );
};
export default Filler;

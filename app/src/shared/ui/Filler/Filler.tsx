import { FC } from 'react';
import cn from 'classnames';
import { t } from 'i18next';
import MessageTwoTone from '@ant-design/icons/MessageTwoTone';

import { Icon } from 'ui-kit';
import { Icon as IconType } from 'ui-kit/Icon/types';

import Fish from '@shared/ui/Fish/Fish';

import css from './Filler.module.scss';

interface FillerProps {
    hasGradient?: boolean;
    hasFish?: boolean;
    icon?: IconType;
    description?: string;
    title?: string;
}

const Filler: FC<FillerProps> = ({
    hasGradient,
    hasFish,
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
            {hasFish && <Fish />}
        </div>
    );
};
export default Filler;

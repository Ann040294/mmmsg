import { FC } from 'react';
import cn from 'classnames';

import { Avatar } from 'ui-kit';
import { AvatarSizes } from 'ui-kit/Avatar';

import css from './Filler.module.scss';

interface FillerProps {
    hasGradient?: boolean;
    src?: string;
    description?: string;
    title?: string;
}

const Filler: FC<FillerProps> = ({ hasGradient, src, description, title }) => {
    return (
        <div className={cn(css.root, { [css.gradient]: hasGradient })}>
            {src && (
                <div className={css.wrapperAvatar}>
                    <Avatar
                        className={css.avatar}
                        size={AvatarSizes.LARGE}
                        src={src}
                    />
                </div>
            )}
            {title && <h2 className={css.title}>{title}</h2>}
            {description && <p className={css.description}>{description}</p>}
            <div className={css.fish} />
        </div>
    );
};
export default Filler;

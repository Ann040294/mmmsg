import { FC } from 'react';

import IconItem from '@shared/ui/HeaderPage/IconItem/IconItem';

import { IconItemType } from './IconItem/types';

import css from './HeaderPage.module.scss';

interface HeaderPageProps {
    label: string;
    iconsLeft?: IconItemType[];
    iconsRight?: IconItemType[];
}

const HeaderPage: FC<HeaderPageProps> = ({ label, iconsRight, iconsLeft }) => {
    return (
        <div className={css.root}>
            <div className={css.item}>
                {iconsLeft &&
                    iconsLeft.map((item) => (
                        <IconItem
                            key={item.id}
                            icon={item}
                            className={css.icon}
                        />
                    ))}

                {label}
            </div>
            <div className={css.item}>
                {iconsRight &&
                    iconsRight.map((item) => (
                        <IconItem
                            key={item.id}
                            icon={item}
                            className={css.icon}
                        />
                    ))}
            </div>
        </div>
    );
};

export default HeaderPage;

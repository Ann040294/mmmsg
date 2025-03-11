import { FC } from 'react';

import { IconItems, IconItemType } from './IconItems';

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
                {iconsLeft && <IconItems options={iconsLeft} />}
                {label}
            </div>
            {iconsRight && <IconItems options={iconsRight} />}
        </div>
    );
};

export default HeaderPage;

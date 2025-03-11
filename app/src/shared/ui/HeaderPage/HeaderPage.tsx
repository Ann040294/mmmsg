import { FC } from 'react';

import { IconItems, IconItemType } from './IconItems';

import css from './HeaderPage.module.scss';

interface HeaderPageProps {
    label: string;
    leftIcons?: IconItemType[];
    rightIcons?: IconItemType[];
}

const HeaderPage: FC<HeaderPageProps> = ({ label, leftIcons, rightIcons }) => {
    return (
        <div className={css.root}>
            <div className={css.item}>
                {leftIcons && <IconItems options={leftIcons} />}
                {label}
            </div>
            {rightIcons && <IconItems options={rightIcons} />}
        </div>
    );
};

export default HeaderPage;

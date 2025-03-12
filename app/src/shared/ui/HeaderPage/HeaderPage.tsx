import { FC } from 'react';

import { ButtonItems, ButtonItemType } from './ButtonItems';

import css from './HeaderPage.module.scss';

interface HeaderPageProps {
    label: string;
    leftButtons?: ButtonItemType[];
    rightButtons?: ButtonItemType[];
}

const HeaderPage: FC<HeaderPageProps> = ({
    label,
    leftButtons,
    rightButtons,
}) => {
    return (
        <div className={css.root}>
            <div className={css.item}>
                {leftButtons && <ButtonItems options={leftButtons} />}
                {label}
            </div>
            {rightButtons && <ButtonItems options={rightButtons} />}
        </div>
    );
};

export default HeaderPage;

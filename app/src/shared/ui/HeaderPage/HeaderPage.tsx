import { FC } from 'react';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

    return (
        <div className={css.root}>
            <div className={css.item}>
                {leftButtons && <ButtonItems options={leftButtons} />}
                {t(label)}
            </div>
            {rightButtons && <ButtonItems options={rightButtons} />}
        </div>
    );
};

export default HeaderPage;

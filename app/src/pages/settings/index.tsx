import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import GlobalOutlined from '@ant-design/icons/GlobalOutlined';

import { IconButton } from 'ui-kit';
import { IconButtonSize } from 'ui-kit/IconButton';

import { Languages } from '@shared/i18n/types';

const SettingsPage: FC = () => {
    const { i18n } = useTranslation();

    const handleLanguageSwitch = () => {
        const newLang =
            i18n.language === Languages.RU ? Languages.EN : Languages.RU;
        i18n.changeLanguage(newLang);
    };

    return (
        <IconButton
            icon={GlobalOutlined}
            size={IconButtonSize.MEDIUM}
            onClick={handleLanguageSwitch}
        />
    );
};

export default SettingsPage;

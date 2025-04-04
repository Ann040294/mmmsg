import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import GlobalOutlined from '@ant-design/icons/GlobalOutlined';

import { IconButton } from 'ui-kit';
import { IconButtonSize } from 'ui-kit/IconButton';

const SettingsPage: FC = () => {
    const { i18n } = useTranslation();

    const handleLanguageSwitch = () => {
        const newLang = i18n.language === 'ru' ? 'en' : 'ru';
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

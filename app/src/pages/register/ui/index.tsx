import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { Button, Checkbox, Input, InputVariants, Layout } from 'ui-kit';
import { ButtonSize, ButtonVariants } from 'ui-kit/Button';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';
import Filler from '@shared/ui/Filler/Filler';

import { registrationFields } from './config/registrationFields';

import css from './register.module.scss';

const RegisterPage: FC = () => {
    const { t } = useTranslation();

    return (
        <Layout className={css.registerPage}>
            <div className={css.left}>
                <h1 className={css.title}>{t('register.title')}</h1>
                <p className={css.subtitle}>{t('register.subtitle')}</p>

                {registrationFields.map((field) => (
                    <Input
                        key={field.name}
                        name={field.name}
                        label={t(field.labelKey)}
                        placeholder={t(field.placeholderKey)}
                        variant={InputVariants.OUTLINED}
                        className={css.registerInput}
                        type={field.type}
                    />
                ))}

                <Checkbox
                    label={t('register.agreeTerms')}
                    className={css.checkboxLabel}
                />

                <Button
                    variant={ButtonVariants.PRIMARY}
                    size={ButtonSize.LARGE}
                    text={t('register.mainButton.label')}
                ></Button>
                <p>
                    {t('register.haveAccount') + ' '}
                    <Link
                        to={ROUTE_CONFIG.LOGIN.path}
                        className={css.link}
                    >
                        {t('login.title')}
                    </Link>
                </p>
            </div>
            <div className={css.right}>
                <Filler hasGradient />
            </div>
        </Layout>
    );
};

export default RegisterPage;

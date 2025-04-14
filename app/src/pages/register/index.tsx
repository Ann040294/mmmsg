import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { Button, Checkbox, Input, InputVariants, Layout } from 'ui-kit';
import { ButtonSize, ButtonVariants } from 'ui-kit/Button';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';
import Filler from '@shared/ui/Filler/Filler';

import css from './register.module.scss';

const RegisterPage: FC = () => {
    const { t } = useTranslation();

    return (
        <Layout className={css.registerPage}>
            <div className={css.left}>
                <h1 className={css.title}>{t('register.title')}</h1>
                <p className={css.subtitle}>{t('register.subtitle')}</p>
                <Input
                    label={t('input.name.label')}
                    placeholder={t('input.name.placeholder')}
                    variant={InputVariants.OUTLINED}
                    className={css.registerInput}
                />
                <Input
                    label={t('input.email.label')}
                    placeholder={t('input.email.placeholder')}
                    variant={InputVariants.OUTLINED}
                    className={css.registerInput}
                />
                <Input
                    label={t('input.password.label')}
                    placeholder={t('input.password.placeholder')}
                    variant={InputVariants.OUTLINED}
                    className={css.registerInput}
                />
                <Input
                    label={t('input.confirmPassword.label')}
                    placeholder={t('input.confirmPassword.placeholder')}
                    variant={InputVariants.OUTLINED}
                    className={css.registerInput}
                />

                <Checkbox
                    label={t('agreeTerms')}
                    className={css.checkboxLabel}
                />

                <Button
                    variant={ButtonVariants.PRIMARY}
                    size={ButtonSize.LARGE}
                    text={t('register.label')}
                ></Button>
                <p>
                    {t('haveAccount') + ' '}
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

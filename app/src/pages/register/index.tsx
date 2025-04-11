import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { Input, InputVariants, Layout } from 'ui-kit';
import { Button, ButtonSize, ButtonVariants } from 'ui-kit/Button';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';
import Filler from '@shared/ui/Filler/Filler';

import css from './register.module.scss';

const RegisterPage: FC = () => {
    const { t } = useTranslation();

    return (
        <Layout className={css.registerPage}>
            <div className={css.left}>
                <h1 className={css.title}>{t('register.title')}</h1>
                <p className={css.subtitle}>Создайте свой аккаунт</p>
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

                <label
                    htmlFor="agree"
                    className={css.checkboxLabel}
                >
                    <input
                        required
                        type="checkbox"
                        id="agree"
                    />
                    {t('agreeTerms')}
                </label>
                <Button
                    variant={ButtonVariants.PRIMARY}
                    size={ButtonSize.LARGE}
                    text={t('login.label')}
                ></Button>
                <p>
                    {t('haveAccount') + ' '}
                    <Link
                        to={ROUTE_CONFIG.LOGIN.path}
                        className={css.link}
                    >
                        {t('login.label')}
                    </Link>
                </p>
            </div>
            <div className={css.right}>
                <Filler hasGradient={true} />
            </div>
        </Layout>
    );
};

export default RegisterPage;

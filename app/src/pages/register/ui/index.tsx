import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

import { Layout } from 'ui-kit';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';
import Filler from '@shared/ui/Filler/Filler';

import { RegisterForm } from './RegisterForm/RegisterForm';

import css from './register.module.scss';

const RegisterPage: FC = () => {
    const { t } = useTranslation();

    return (
        <Layout className={css.registerPage}>
            <div className={css.left}>
                <h1 className={css.title}>{t('register.title')}</h1>
                <p className={css.subtitle}>{t('register.subtitle')}</p>
                <RegisterForm />
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

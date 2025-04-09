import { FC } from 'react';

import { Input, InputVariants, Layout } from 'ui-kit';
import { Button, ButtonSize, ButtonVariants } from 'ui-kit/Button';

import Filler from '@shared/ui/Filler/Filler';

import css from './register.module.scss';

const RegisterPage: FC = () => {
    return (
        <Layout className={css.registerPage}>
            <div className={css.left}>
                <h1 className={css.title}>Get Started</h1>
                <p className={css.subtitle}>Lorem ipsum dolor sit amet</p>
                <Input
                    label="Name"
                    placeholder="Enter name here"
                    variant={InputVariants.OUTLINED}
                    className={css.registerInput}
                />
                <Input
                    label="Email"
                    placeholder="Enter email here"
                    variant={InputVariants.OUTLINED}
                    className={css.registerInput}
                />
                <Input
                    label="Password"
                    placeholder="Enter password here"
                    variant={InputVariants.OUTLINED}
                    className={css.registerInput}
                />
                <Input
                    label="Confirm Password"
                    placeholder="Confirm password here"
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
                    Я согласен с условиями
                </label>
                <Button
                    variant={ButtonVariants.PRIMARY}
                    size={ButtonSize.MEDIUM}
                    text={'Signup'}
                ></Button>
                <p>
                    Уже есть аккаунт ? <a href="#">Войти</a>
                </p>
            </div>
            <div className={css.right}>
                <Filler hasGradient={true} />
            </div>
        </Layout>
    );
};

export default RegisterPage;

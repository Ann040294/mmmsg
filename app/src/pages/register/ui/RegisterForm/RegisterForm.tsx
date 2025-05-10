import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, Checkbox, Input, InputVariants } from 'ui-kit';
import { ButtonSize, ButtonVariants } from 'ui-kit/Button';
import { NoticeTypes } from 'ui-kit/Notice';

import {
    RegistrationField,
    registrationFields,
} from './config/registrationFields';
import { RegisterFormValues, registerSchema } from './schema';

import css from './RegisterForm.module.scss';

export const RegisterForm: React.FC = () => {
    const { t } = useTranslation();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            agree: false,
        },
    });

    const onSubmit = (data: RegisterFormValues) => {
        console.log('submit', data);
    };

    return (
        <form
            className={css.form}
            onSubmit={handleSubmit(onSubmit)}
        >
            {registrationFields.map((field: RegistrationField) => (
                <Controller
                    key={field.name}
                    name={field.name}
                    control={control}
                    render={({ field: f }) => {
                        const messageKey = errors[field.name]?.message;

                        return (
                            <Input
                                {...f}
                                type={field.type}
                                variant={InputVariants.OUTLINED}
                                className={css.registerInput}
                                label={t(`register.${field.name}.label`)}
                                message={messageKey ? t(messageKey) : undefined}
                                placeholder={t(
                                    `register.${field.name}.placeholder`,
                                )}
                                noticeType={
                                    errors[field.name]
                                        ? NoticeTypes.ERROR
                                        : undefined
                                }
                            />
                        );
                    }}
                />
            ))}
            <Controller
                name="agree"
                control={control}
                render={({ field: f }) => (
                    <Checkbox
                        {...f}
                        isChecked={f.value}
                        label={t('register.agreeTerms')}
                        className={css.checkboxLabel}
                    />
                )}
            />
            <Button
                text={t('register.mainButton.label')}
                variant={ButtonVariants.PRIMARY}
                size={ButtonSize.LARGE}
                onClick={handleSubmit(onSubmit)}
            />
        </form>
    );
};

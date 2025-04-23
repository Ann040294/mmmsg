import {
    ChangeEvent,
    FC,
    FormEvent,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { Avatar, Button, Input, InputVariants, Notice, Spinner } from 'ui-kit';
import { AvatarSizes } from 'ui-kit/Avatar';
import { NoticeTypes } from 'ui-kit/Notice';

import {
    useGetUserQuery,
    useUpdateUserMutation,
} from '@entities/user/api/slice';
import { User } from '@entities/user/model/user';

import { INPUT_FIELDS } from './config/inputFields';

import css from './ProfileForm.module.scss';

const ProfileForm: FC = () => {
    const [value, setValue] = useState<User>();

    const {
        data: user,
        isLoading: isLoadingUser,
        isError: isErrorUser,
    } = useGetUserQuery();

    const [
        updateUser,
        { isLoading: isLoadingUpdateUser, isError: isErrorUpdateUser },
    ] = useUpdateUserMutation();

    const { t } = useTranslation();

    const isPendingData = isLoadingUser || isLoadingUpdateUser;
    const isErrorData = isErrorUser || isErrorUpdateUser;

    useEffect(() => {
        setValue(user);
    }, [user]);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setValue((prevState) => {
            if (prevState) {
                return {
                    ...prevState,
                    [event.target.name]: event.target.value,
                };
            }

            return undefined;
        });
    }, []);

    const handleSubmit = useCallback(
        async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            if (value) {
                updateUser(value);
            }
        },
        [value],
    );

    return (
        <div className={css.root}>
            {isPendingData && (
                <div
                    key="loaderProfileForm"
                    className={css.spinner}
                >
                    <Spinner />
                </div>
            )}
            <div
                key="profileForm"
                className={cn(css.formWrapper, {
                    [css.blurred]: isPendingData,
                })}
            >
                <Avatar
                    size={AvatarSizes.LARGE}
                    src={value?.avatarSrc}
                />
                <form
                    className={css.form}
                    onSubmit={handleSubmit}
                >
                    {INPUT_FIELDS.map((item) => (
                        <Input
                            isRequired
                            key={item.name}
                            variant={InputVariants.OUTLINED}
                            label={t(item.label)}
                            name={item.name}
                            value={value?.[item.name] || ''}
                            onChange={handleChange}
                        />
                    ))}
                    <Button text={t('profile.form.button')} />
                </form>
                {isErrorData && (
                    <Notice
                        hasBorder
                        key="errorProfile"
                        type={NoticeTypes.ERROR}
                        message={t('notice.error')}
                    />
                )}
            </div>
        </div>
    );
};

export default ProfileForm;

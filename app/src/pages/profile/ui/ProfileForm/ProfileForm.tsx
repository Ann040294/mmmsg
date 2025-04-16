import {
    ChangeEvent,
    FC,
    FormEvent,
    useCallback,
    useEffect,
    useState,
} from 'react';
import cn from 'classnames';
import { t } from 'i18next';

import { Avatar, Button, Input, InputVariants, Spinner } from 'ui-kit';
import { AvatarSizes } from 'ui-kit/Avatar';

import {
    useLazyGetUserQuery,
    useUpdateUserMutation,
} from '@entities/user/api/slice';
import { User } from '@entities/user/model/user';

import { INPUT_FIELDS } from './config/inputFields';

import css from './ProfileForm.module.scss';

const ProfileForm: FC = () => {
    const [value, setValue] = useState<User>();
    const [getUser, { isLoading: isLoadingUser }] = useLazyGetUserQuery();
    const [updateUser, { isLoading: isLoadingUpdateUser }] =
        useUpdateUserMutation();

    const isPendingData = isLoadingUser || isLoadingUpdateUser;

    useEffect(() => {
        (async () => {
            const user = await getUser().unwrap();
            setValue(user);
        })();
    }, []);

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
                const newUserInfo = await updateUser(value).unwrap();
                setValue(newUserInfo);
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
            </div>
        </div>
    );
};

export default ProfileForm;

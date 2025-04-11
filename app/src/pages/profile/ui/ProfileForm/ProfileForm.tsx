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

import { getUser, updateUserInfo } from '@entities/user/api/user';
import { User } from '@entities/user/model/user';

import { useIsToggled } from '@shared/lib/hooks/useIsToggled';

import { INPUT_FIELDS } from './config/inputFields';

import css from './ProfileForm.module.scss';

const ProfileForm: FC = () => {
    const [value, setValue] = useState<User>();

    const {
        isToggled: isLoading,
        toggleOn: loadingOn,
        toggleOff: loadingOff,
    } = useIsToggled(false);

    const isPendingData = !value || isLoading;

    useEffect(() => {
        loadingOn();

        (async () => {
            const user = await getUser();
            setValue(user);
        })();

        loadingOff();
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

            loadingOn();

            if (value) {
                const newUserInfo = await updateUserInfo();
                setValue(newUserInfo);
            }

            loadingOff();
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

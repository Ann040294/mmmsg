import {
    ChangeEvent,
    FC,
    FormEvent,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { t } from 'i18next';

import { Avatar, InputVariants, Spinner } from 'ui-kit';
import { AvatarSizes } from 'ui-kit/Avatar';
import { Button } from 'ui-kit/Button';
import Input from 'ui-kit/Input/Input';

import { updateUserInfo } from '@entities/user/api/user';
import { userMock } from '@entities/user/mock/userMock';
import { User } from '@entities/user/model/user';

import { INPUT_FIELDS } from './config/inputFields';

import css from './ProfileForm.module.scss';

const ProfileForm: FC = () => {
    const [initialValue, setInitialValue] = useState<User>();
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setInitialValue(userMock);
        }, 1000);
    }, []);

    const handleOnChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setInitialValue((prevState) => {
                if (prevState) {
                    return {
                        ...prevState,
                        [event.target.name]: event.target.value,
                    };
                }

                return undefined;
            });
        },
        [],
    );

    const handleOnSubmit = useCallback(
        async (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setLoading(true);

            if (initialValue) {
                const newUserInfo = await updateUserInfo(initialValue);
                setInitialValue(newUserInfo);
            }

            setLoading(false);
        },
        [initialValue],
    );

    if (!initialValue || isLoading) {
        return (
            <div className={css.root}>
                <Spinner />
            </div>
        );
    }

    return (
        <div className={css.root}>
            <Avatar
                size={AvatarSizes.LARGE}
                src={initialValue.avatarSrc}
            />
            <form
                className={css.form}
                onSubmit={handleOnSubmit}
            >
                {INPUT_FIELDS.map((item) => (
                    <Input
                        isRequired
                        key={item.name}
                        variant={InputVariants.OUTLINED}
                        label={t(item.label)}
                        name={item.name}
                        value={initialValue[item.name]}
                        iconRight={item.iconRight}
                        onChange={handleOnChange}
                    />
                ))}
                <Button text={t('profile.form.button')} />
            </form>
        </div>
    );
};

export default ProfileForm;

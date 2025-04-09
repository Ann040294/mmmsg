import FormOutlined from '@ant-design/icons/FormOutlined';

import { Icon as IconType } from 'ui-kit/Icon/types';

import { User } from '@entities/user/model/user';

type InputFieldsType = {
    label: string;
    name: keyof User;
    iconRight?: IconType;
};

export const INPUT_FIELDS: InputFieldsType[] = [
    {
        label: 'profile.form.name',
        name: 'name',
    },
    {
        label: 'profile.form.profession',
        name: 'profession',
    },
    {
        label: 'profile.form.phone',
        name: 'phone',
    },
    {
        label: 'profile.form.email',
        name: 'email',
        iconRight: FormOutlined,
    },
];

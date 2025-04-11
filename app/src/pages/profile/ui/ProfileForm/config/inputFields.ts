import { User } from '@entities/user/model/user';

type InputFieldsType = {
    label: string;
    name: keyof User;
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
    },
];

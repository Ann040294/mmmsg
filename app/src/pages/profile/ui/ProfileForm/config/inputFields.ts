import { User } from '@entities/user/model/user';

type InputFieldsType = {
    label: string;
    name: keyof User;
};

export const INPUT_FIELDS: InputFieldsType[] = [
    {
        label: 'profile.inputs.name',
        name: 'name',
    },
    {
        label: 'profile.inputs.profession',
        name: 'profession',
    },
    {
        label: 'profile.inputs.phone',
        name: 'phone',
    },
    {
        label: 'profile.inputs.email',
        name: 'email',
    },
];

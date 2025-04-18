export const registrationFields = [
    { name: 'name', type: 'text' },
    { name: 'email', type: 'email' },
    { name: 'password', type: 'password' },
    { name: 'confirmPassword', type: 'password' },
] as const;

export type RegistrationField = (typeof registrationFields)[number];

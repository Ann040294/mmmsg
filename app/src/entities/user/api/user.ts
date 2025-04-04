import { User } from '@entities/user/model/user';

export const updateUserInfo = (user: User): Promise<User> => {
    return new Promise<User>((resolve) => {
        setTimeout(() => {
            return resolve(user);
        }, 1000);
    });
};

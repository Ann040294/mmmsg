import { userMock } from '@entities/user/mock/userMock';
import { User } from '@entities/user/model/user';

export const getUser = (): Promise<User> => {
    return new Promise<User>((resolve) => {
        setTimeout(() => {
            return resolve(userMock);
        }, 1000);
    });
};

export const updateUserInfo = (): Promise<User> => {
    return new Promise<User>((resolve) => {
        setTimeout(() => {
            return resolve(userMock);
        }, 1000);
    });
};

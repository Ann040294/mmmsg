import { contactsMock } from '@entities/contacts/mock/contactsMock';
import { Contact } from '@entities/contacts/model/contact';

import {
    getPaginationArray,
    PaginationSettings,
} from '@shared/lib/utils/getPaginationArray';

export const getAllContacts = (
    paginationSettings: PaginationSettings,
): Promise<Contact[]> => {
    return new Promise((resolve) => {
        const contacts = getPaginationArray(contactsMock, paginationSettings);
        setTimeout(() => {
            resolve(contacts);
        }, 1000);
    });
};

export const searchContacts = (
    substring: string,
    paginationSettings: PaginationSettings,
) => {};

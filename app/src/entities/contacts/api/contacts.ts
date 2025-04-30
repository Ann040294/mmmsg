import { contactMock } from '@entities/contacts/mock/contactMock';
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
) => {
    return new Promise<Contact[]>((resolve) => {
        const array = contactsMock.filter((contact) =>
            Object.values(contact).some((value) =>
                value.toLowerCase().includes(substring.toLowerCase()),
            ),
        );

        const contacts = getPaginationArray<Contact>(array, paginationSettings);

        setTimeout(() => {
            resolve(contacts);
        }, 1000);
    });
};

export const addContact = (ip: string): Promise<Contact> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(contactMock);
        });
    });
};

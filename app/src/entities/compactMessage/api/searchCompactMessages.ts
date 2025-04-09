import { compactMessagesMock } from '@entities/compactMessage/mock/compactMessagesMock';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

import {
    getPaginationArray,
    PaginationSettings,
} from '@shared/lib/utils/getPaginationArray';

export const searchCompactMessages = (
    substring: string,
    paginationSettings: PaginationSettings,
): Promise<CompactMessage[]> => {
    return new Promise<CompactMessage[]>((resolve) => {
        const array = compactMessagesMock.filter((compactMessage) =>
            Object.values(compactMessage).some((value) =>
                value.toLowerCase().includes(substring.toLowerCase()),
            ),
        );

        const compactMessages = getPaginationArray<CompactMessage>(
            array,
            paginationSettings,
        );

        setTimeout(() => {
            resolve(compactMessages);
        }, 1000);
    });
};

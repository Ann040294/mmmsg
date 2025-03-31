import { compactMessagesMock } from '@entities/compactMessage/mock/compactMessagesMock';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

import {
    getPaginationArray,
    PaginationSettings,
} from '@shared/lib/utils/getPaginationArray';

export const searchCompactMessages = (
    substring: string,
    PaginationSettings: PaginationSettings,
): Promise<CompactMessage[]> => {
    return new Promise<CompactMessage[]>((resolve) => {
        const array = compactMessagesMock.filter((compactMessage) =>
            Object.values(compactMessage).some((value) =>
                value.toLowerCase().includes(substring.toLowerCase()),
            ),
        );

        return resolve(
            getPaginationArray<CompactMessage>(array, PaginationSettings),
        );
    });
};

import { compactMessagesMock } from '@entities/compactMessage/mock/compactMessagesMock';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

import {
    getPaginationArray,
    PaginationSettings,
} from '@shared/lib/utils/getPaginationArray';

export const getAllCompactMessages = (
    paginationSettings: PaginationSettings,
): Promise<CompactMessage[]> => {
    return new Promise((resolve) => {
        const compactMessages: CompactMessage[] =
            getPaginationArray<CompactMessage>(
                compactMessagesMock,
                paginationSettings,
            );

        setTimeout(() => {
            resolve(compactMessages);
        }, 5000);
    });
};

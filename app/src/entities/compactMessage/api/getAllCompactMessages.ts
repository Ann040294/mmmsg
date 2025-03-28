import { compactMessagesMock } from '@entities/compactMessage/mock/compactMessagesMock';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

import {
    getPaginationArray,
    PaginationSettings,
} from '@shared/lib/utils/getPaginationArray';

export const getAllCompactMessages = (
    paginationSettings: PaginationSettings,
): Promise<CompactMessage[]> => {
    return Promise.resolve(
        getPaginationArray<CompactMessage>(
            compactMessagesMock,
            paginationSettings,
        ),
    );
};

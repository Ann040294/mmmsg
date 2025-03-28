import { compactMessagesMock } from '@entities/compactMessage/mock/compactMessagesMock';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

import {
    getPaginationArray,
    PaginationSettings,
} from '@shared/lib/utils/getPaginationArray';

export const getAllCompactMessages = async (
    PaginationSettings: PaginationSettings,
): Promise<CompactMessage[]> => {
    return getPaginationArray<CompactMessage>(
        compactMessagesMock,
        PaginationSettings,
    );
};

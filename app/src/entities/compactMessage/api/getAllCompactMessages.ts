import { compactMessagesMock } from '@entities/compactMessage/mock/compactMessagesMock';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

import { getPaginateArray } from '@shared/lib/utils/getPaginateArray';

export const getAllCompactMessages = async (
    page: number = 1,
    maxSize: number = 15,
): Promise<CompactMessage[]> => {
    return getPaginateArray<CompactMessage>(compactMessagesMock, page, maxSize);
};

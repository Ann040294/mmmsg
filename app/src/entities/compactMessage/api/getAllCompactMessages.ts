import { compactMessagesMock } from '@entities/compactMessage/mock/compactMessagesMock';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

export const getAllCompactMessages = async (
    pageSize = 10,
): Promise<CompactMessage[]> => {
    pageNumber += 1;

    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = Math.min(
        startIndex + pageSize,
        compactMessagesMock.length,
    );

    return compactMessagesMock.slice(startIndex, endIndex);
};

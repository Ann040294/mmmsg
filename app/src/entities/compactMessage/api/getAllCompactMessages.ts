import { compactMessagesMock } from '@entities/compactMessage/mock/compactMessagesMock';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

export const getAllCompactMessages = async (
    page: number = 1,
    maxSize: number = 10,
): Promise<CompactMessage[]> => {
    const startIndex = (page - 1) * maxSize;
    const endIndex = Math.min(startIndex + maxSize, compactMessagesMock.length);

    return structuredClone(compactMessagesMock).slice(startIndex, endIndex);
};

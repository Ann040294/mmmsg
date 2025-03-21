import { compactMessagesMock } from '@entities/compactMessage/mock/compactMessagesMock';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

export const searchCompactMessages = async (
    substring: string,
    page: number = 1,
    maxSize: number = 15,
): Promise<CompactMessage[]> => {
    const startIndex = (page - 1) * maxSize;
    const endIndex = Math.min(startIndex + maxSize, compactMessagesMock.length);

    const array = compactMessagesMock.filter((compactMessage: CompactMessage) =>
        Object.values(compactMessage).some((value) =>
            value.toLowerCase().includes(substring.toLowerCase()),
        ),
    );

    return array.slice(startIndex, endIndex);
};

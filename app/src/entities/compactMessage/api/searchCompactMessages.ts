import { compactMessagesMock } from '@entities/compactMessage/mock/compactMessagesMock';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

import { getPaginateArray } from '@shared/lib/utils/getPaginateArray';

export const searchCompactMessages = async (
    substring: string,
    page: number = 1,
    maxSize: number = 15,
): Promise<CompactMessage[]> => {
    const array = compactMessagesMock.filter((compactMessage) =>
        Object.values(compactMessage).some((value) =>
            value.toLowerCase().includes(substring.toLowerCase()),
        ),
    );

    return getPaginateArray<CompactMessage>(array, page, maxSize);
};

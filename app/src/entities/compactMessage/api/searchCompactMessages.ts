import { compactMessagesMock } from '@entities/compactMessage/mock/compactMessagesMock';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

import {
    getPaginateArray,
    paginateSettings,
} from '@shared/lib/utils/getPaginateArray';

export const searchCompactMessages = (
    substring: string,
    paginateSettings: paginateSettings,
): Promise<CompactMessage[]> => {
    return new Promise<CompactMessage[]>((resolve) => {
        const array = compactMessagesMock.filter((compactMessage) =>
            Object.values(compactMessage).some((value) =>
                value.toLowerCase().includes(substring.toLowerCase()),
            ),
        );

        return resolve(
            getPaginateArray<CompactMessage>(array, paginateSettings),
        );
    });
};

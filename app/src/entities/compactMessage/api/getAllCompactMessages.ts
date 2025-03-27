import { compactMessagesMock } from '@entities/compactMessage/mock/compactMessagesMock';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

import {
    getPaginateArray,
    paginateSettings,
} from '@shared/lib/utils/getPaginateArray';

export const getAllCompactMessages = async (
    paginateSettings: paginateSettings,
): Promise<CompactMessage[]> => {
    return getPaginateArray<CompactMessage>(
        compactMessagesMock,
        paginateSettings,
    );
};

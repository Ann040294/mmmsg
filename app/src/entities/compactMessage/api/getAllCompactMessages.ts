import { compactMessagesMock } from '@entities/compactMessage/mock/compactMessagesMock';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

export const getAllCompactMessages = async (): Promise<CompactMessage[]> => {
    return compactMessagesMock;
};

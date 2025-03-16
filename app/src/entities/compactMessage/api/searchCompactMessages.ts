import { compactMessagesMock } from '@entities/compactMessage/mock/compactMessagesMock';
import { CompactMessage } from '@entities/compactMessage/model/compactMessage';

// export const searchCompactMessages = async (
//     substring: string,
// ): Promise<CompactMessage[]> => {
//     return compactMessagesMock.filter(
//         (compactMessage: CompactMessage) =>
//             compactMessage.message.toLowerCase().includes(substring) ||
//             compactMessage.fullName.toLowerCase().includes(substring),
//     );
// };

export const searchCompactMessages = async (
    substring: string,
): Promise<CompactMessage[]> => {
    return compactMessagesMock.filter((compactMessage: CompactMessage) =>
        Object.values(compactMessage).some((value) =>
            value.toLowerCase().includes(substring.toLowerCase()),
        ),
    );
};

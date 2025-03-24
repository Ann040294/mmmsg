export const getPaginateArray = <T>(
    array: T[],
    page: number = 1,
    maxSize: number = 15,
): T[] => {
    const startIndex = (page - 1) * maxSize;
    const endIndex = Math.min(startIndex + maxSize, array.length);

    return array.slice(startIndex, endIndex);
};

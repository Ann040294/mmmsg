export type paginateSettings = {
    page: number;
    maxSize: number;
};

export const getPaginateArray = <T>(
    array: T[],
    settings: paginateSettings,
): T[] => {
    let { page, maxSize } = settings;

    if (page < 2) {
        page = 1;
    }

    if (maxSize < 1) {
        maxSize = 1;
    }
    const startIndex = (page - 1) * maxSize;
    const endIndex = Math.min(startIndex + maxSize, array.length);

    return array.slice(startIndex, endIndex);
};

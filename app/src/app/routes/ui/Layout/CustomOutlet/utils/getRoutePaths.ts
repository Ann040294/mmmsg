export const getRoutePaths = (location: string): string[] => {
    return location.split('/').filter((item) => item !== '');
};

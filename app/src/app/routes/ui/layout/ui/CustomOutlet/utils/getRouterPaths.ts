export const getRouterPaths = (location: string): string[] => {
    return location.split('/').filter((item) => item !== '');
};

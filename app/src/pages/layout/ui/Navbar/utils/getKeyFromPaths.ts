import { NavLinkTypeExtend } from '../Item';

export const getKeyFromPaths = (pathsArray: NavLinkTypeExtend[]): string => {
    return pathsArray.map((item) => item.path).join('-');
};

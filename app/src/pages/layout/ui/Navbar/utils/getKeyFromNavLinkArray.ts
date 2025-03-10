import { NavLinkTypeExtend } from '../Item';

export const getKeyFromNavLinkArray = (navLinkArray: NavLinkTypeExtend[]): string => {
    return navLinkArray.map((item) => item.path).join('-');
};

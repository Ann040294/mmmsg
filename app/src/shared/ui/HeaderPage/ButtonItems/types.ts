import { Icon as IconType } from 'ui-kit/Icon/types';

export type ButtonItemType = {
    id: string | number;
    icon: IconType;
    isDisabled?: boolean;
    onClick?: () => void;
};

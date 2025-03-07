import { Icon as IconType} from 'ui-kit/Icon/types';

export type IconItemType = {
    id: string | number;
    icon: IconType;
    onClick?: () => void;
}

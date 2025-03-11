import {FC} from 'react';

import {Icon as IconType} from 'ui-kit/Icon/types';

interface IconItemProps {
    icon: IconType;
    className?: string;
}

const IconItem: FC<IconItemProps> = ({icon: Icon}) => {
    return (
        <Icon style={{fontSize: '18px'}}/>
    );
};

export default IconItem;

import RollbackOutlined from '@ant-design/icons/RollbackOutlined';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';
import { ButtonItemType } from '@shared/ui/HeaderPage/ButtonItems';

export const RIGHT_HEADER_NEW_CHAT_PAGE_BUTTONS: ButtonItemType[] = [
    {
        id: '1',
        icon: RollbackOutlined,
        onClick: () => {
            window.location.href = ROUTE_CONFIG.HOME.path;
        },
    },
];

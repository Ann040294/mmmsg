import FormOutlined from '@ant-design/icons/FormOutlined';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';
import { ButtonItemType } from '@shared/ui/HeaderPage/ButtonItems/types';

export const RIGHT_HEADER_PAGE_BUTTONS: ButtonItemType[] = [
    {
        id: '1',
        icon: FormOutlined,
        onClick: () => {
            window.location.href = ROUTE_CONFIG.NEW_CHAT.path;
        },
    },
];

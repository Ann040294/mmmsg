import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import ExclamationCircleOutlined from '@ant-design/icons/ExclamationCircleOutlined';

import { Icon } from '../Icon/types';

//import { Icon } from '../Icon';

export enum NoticeTypes {
    ERROR = 'error',
    SUCCESS = 'success',
    INFO = 'info',
}

export const NoticeTypesMap: Readonly<Record<NoticeTypes, Icon>> = {
    [NoticeTypes.ERROR]: CloseOutlined,
    [NoticeTypes.SUCCESS]: CheckCircleOutlined,
    [NoticeTypes.INFO]: ExclamationCircleOutlined,
};

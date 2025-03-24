import CheckCircleOutlined from '@ant-design/icons/CheckCircleOutlined';
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import ExclamationCircleOutlined from '@ant-design/icons/ExclamationCircleOutlined';
import WarningOutlined from '@ant-design/icons/WarningOutlined';

import { Icon } from '../Icon/types';

export enum NoticeTypes {
    ERROR = 'error',
    SUCCESS = 'success',
    INFO = 'info',
    WARNING = 'warning',
}

export enum NoticeVariant {
    DEFAULT = 'default',
    FILLED = 'filled',
}

export const NoticeTypesMap: Readonly<Record<NoticeTypes, Icon>> = {
    [NoticeTypes.ERROR]: CloseOutlined,
    [NoticeTypes.SUCCESS]: CheckCircleOutlined,
    [NoticeTypes.INFO]: ExclamationCircleOutlined,
    [NoticeTypes.WARNING]: WarningOutlined,
};

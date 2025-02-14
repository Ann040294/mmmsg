export interface NoticeProps {
    type: 'error' | 'info' | 'success'; //enum. обязательный type
    message: string;
}
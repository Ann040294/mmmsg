import { FC } from 'react';
import { useParams } from 'react-router';

const DialogUserPage: FC = () => {
    const { userID } = useParams();

    return <div>ID пользователя {userID}</div>;
};

export default DialogUserPage;

import { FC } from 'react';
import { useParams } from 'react-router';

const DialogUserPage: FC = () => {
    const { id } = useParams();

    return <div>ID пользователя {id}</div>;
};

export default DialogUserPage;

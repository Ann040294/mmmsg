import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import VerticalAlignBottomOutlined from '@ant-design/icons/VerticalAlignBottomOutlined';

import {Input, InputVariants, Layout} from 'ui-kit';

import { Message, MessageVariant } from '@widgets/Message';

import HeaderChat from '@shared/ui/HeaderChat/HeaderChat';

const DialogUserPage: FC = () => {
    const { userID } = useParams();
    const { t } = useTranslation();

    const actionHeaderChat = [
        { id: '1', text: 'Скачать историю', icon: VerticalAlignBottomOutlined },
    ];

    return (
        <>
           <div>
               <HeaderChat
                   label={'ID пользователя {userID}'}
                   actions={actionHeaderChat}
               />
               <Layout>
                   <Message text={'Test'} /><Message text={'Test'} /><Message text={'TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest'} />
                   <Message
                       text={'Test'}
                       variant={MessageVariant.SECONDARY}
                   />
               <Input variant={InputVariants.FILLED} />
               </Layout>
           </div>
        </>
    );
};

export default DialogUserPage;

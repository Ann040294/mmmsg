import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import VerticalAlignBottomOutlined from '@ant-design/icons/VerticalAlignBottomOutlined';

import { Input, InputVariants } from 'ui-kit';

import { Message, MessageVariant } from '@widgets/Message';

import HeaderChat from '@shared/ui/HeaderChat/HeaderChat';

import css from './DialogPage.module.scss';
import { ArrowRightOutlined, SmileFilled } from '@ant-design/icons';

const DialogUserPage: FC = () => {
    const { userID } = useParams();
    const { t } = useTranslation();

    const actionHeaderChat = [
        {
            id: '1',
            text: t('Скачать историю'),
            icon: VerticalAlignBottomOutlined,
        },
    ];

    return (
        <>
            <div className={css.root}>
                <HeaderChat
                    label={'ID пользователя'}
                    actions={actionHeaderChat}
                />
                <div className={css.messageList}>
                    <Message
                        text={'Hi, Welcome!'}
                        variant={MessageVariant.SECONDARY}
                    />
                    <Message
                        text={'How are you? All OK??'}
                        variant={MessageVariant.SECONDARY}
                    />
                    <Message text={'Hi, All OK!!!!!!!!!'} meta={'sent a few seconds ago'}/>
                    <Input
                        variant={InputVariants.FILLED}
                        iconLeft={SmileFilled}
                        iconRight={ArrowRightOutlined}
                        placeholder={'Type your message here'}
                    />
                </div>
            </div>
        </>
    );
};

export default DialogUserPage;

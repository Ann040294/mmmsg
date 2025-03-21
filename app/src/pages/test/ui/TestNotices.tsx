import { FC } from 'react';

import { Layout, Notice } from 'ui-kit';
import { NoticeTypes, NoticeVariant } from 'ui-kit/Notice';

import css from '../style.module.scss';

export const TestNotices: FC = () => {
    return (
        <Layout className={css.inputs}>
            <Notice
                type={NoticeTypes.ERROR}
                message={NoticeTypes.ERROR}
            />
            <Notice
                type={NoticeTypes.INFO}
                message={NoticeTypes.INFO}
            />
            <Notice
                type={NoticeTypes.SUCCESS}
                message={NoticeTypes.SUCCESS}
            />
            <Notice
                type={NoticeTypes.WARNING}
                message={NoticeTypes.WARNING}
            />
            <Notice
                type={NoticeTypes.SUCCESS}
                message={
                    'tutututututuututtututututututututututututututuutututututututututututututututututuututtututututututututututututututuutututututututututututu'
                }
            />
            <Notice
                type={NoticeTypes.SUCCESS}
                message={
                    'tutututututuutu ttututututututututututututututuututu tututututututututututututututuututtututututututu tutututututututuutututututututututututu'
                }
            />
            <Notice
                type={NoticeTypes.WARNING}
                message="Будьте осторожныыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы !"
                variant={NoticeVariant.FILLED}
            />
            <Notice
                type={NoticeTypes.SUCCESS}
                message="Ты молодец!!!"
                variant={NoticeVariant.FILLED}
            />
            <Notice
                type={NoticeTypes.INFO}
                message="Полезная инфа"
                variant={NoticeVariant.FILLED}
            />
            <Notice
                type={NoticeTypes.ERROR}
                message="Упс, Ошибкенс"
                variant={NoticeVariant.FILLED}
            />
            <Notice
                type={NoticeTypes.WARNING}
                message="Будьте осторожны!"
                variant={NoticeVariant.FILLED}
                hasBorder={true}
            />
            <Notice
                type={NoticeTypes.SUCCESS}
                message="Ты молодец!!!"
                variant={NoticeVariant.FILLED}
                hasBorder={true}
            />
            <Notice
                type={NoticeTypes.INFO}
                message="Полезная инфа"
                variant={NoticeVariant.FILLED}
                hasBorder={true}
            />
            <Notice
                type={NoticeTypes.ERROR}
                message="Упс, Ошибкенс"
                variant={NoticeVariant.FILLED}
                hasBorder={true}
            />
        </Layout>
    );
};

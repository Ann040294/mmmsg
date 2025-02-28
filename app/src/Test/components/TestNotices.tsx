import { FC } from 'react';

import { Layout, Notice } from 'ui-kit';
import { NoticeForm, NoticeTypes } from 'ui-kit/Notice';

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
                form={NoticeForm.FILLED}
            />
            <Notice
                type={NoticeTypes.SUCCESS}
                message="Ты молодец!!!"
                form={NoticeForm.FILLED}
            />
            <Notice
                type={NoticeTypes.INFO}
                message="Полезная инфа"
                form={NoticeForm.FILLED}
            />
            <Notice
                type={NoticeTypes.ERROR}
                message="Упс, Ошибкенс"
                form={NoticeForm.FILLED}
            />
            <Notice
                type={NoticeTypes.WARNING}
                message="Будьте осторожны!"
                form={NoticeForm.FILLED}
                hasBorder={false}
            />
            <Notice
                type={NoticeTypes.SUCCESS}
                message="Ты молодец!!!"
                form={NoticeForm.FILLED}
                hasBorder={false}
            />
            <Notice
                type={NoticeTypes.INFO}
                message="Полезная инфа"
                form={NoticeForm.FILLED}
                hasBorder={false}
            />
            <Notice
                type={NoticeTypes.ERROR}
                message="Упс, Ошибкенс"
                form={NoticeForm.FILLED}
                hasBorder={false}
            />
        </Layout>
    );
};

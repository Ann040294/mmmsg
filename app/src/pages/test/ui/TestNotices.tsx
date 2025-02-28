import { FC } from 'react';
import { Layout, Notice } from 'ui-kit';

import { NoticeTypes } from 'ui-kit/Notice';

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
        </Layout>
    );
};

import { FC } from 'react';
import { Layout, Notice } from 'ui-kit';

import { NoticeTypes } from 'ui-kit/Notice';

export const TestNotices: FC = () => {
    return (
        <Layout>
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
        </Layout>
    );
};

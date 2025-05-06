import { FC } from 'react';

import { Layout, TextViewer } from 'ui-kit';
import { TextViewerVariant } from 'ui-kit/TextViewer/types';

export const TestTextViewer: FC = () => {
    return (
        <Layout>
            <h6>PRIMARY / default</h6>
            <TextViewer
                variant={TextViewerVariant.PRIMARY}
                text="2222222222222222222222222222222222222222222222222222222222222222222222222"
                subText="авравр авравр варварвар аварар аф аф аф аф афав аф"
            />
            <h6>SECONDARY</h6>
            <TextViewer
                title="Test Test Test Test Test Test Test Test Test Test Test Test Test"
                text="1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
                subText="Отправлено"
                variant={TextViewerVariant.SECONDARY}
            />
            <h6>Short</h6>
            <TextViewer
                text="1"
                subText="12:00"
            />
            <h6>Long</h6>
            <TextViewer
                subText="12:01"
                text="
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
            />
        </Layout>
    );
};

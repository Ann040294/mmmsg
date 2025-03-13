import { FC } from 'react';

import { Layout, TextViewer } from 'ui-kit';
import { TextViewerVariant } from 'ui-kit/TextViewer/types';

export const TestTextViewer: FC = () => {
    return (
        <Layout>
            <TextViewer
                title="Test Test Test Test Test Test Test Test Test Test Test Test Test"
                text="1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
                signature="Отправлено"
                variant={TextViewerVariant.SECONDARY}
            />
            <TextViewer
                text="2222222222222222222222222222222222222222222222222222222222222222222222222"
                signature="авравр авравр варварвар аварар аф аф аф аф афав аф"
            />
            <TextViewer
                text="1"
                signature="12:00"
            />
            <TextViewer
                signature="12:01"
                text=" 
            1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
            />
        </Layout>
    );
};

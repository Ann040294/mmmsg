import { useTranslation } from 'react-i18next';

import { Tabs } from 'ui-kit';

import TestSpinners from '@pages/test/ui/TestSpinners';

import { ROUTE_CONFIG } from '@shared/config/routeConfig';

import { TestActions } from './ui/TestActions';
import { TestAvatars } from './ui/TestAvatars';
import { TestButtons } from './ui/TestButtons';
import { TestCards } from './ui/TestCards';
import { TestCircleButtons } from './ui/TestCircleButtons';
import TestDropdowns from './ui/TestDropdowns';
import { TestIcons } from './ui/TestIcons';
import { TestInputs } from './ui/TestInputs';
import { TestMessage } from './ui/TestMessage';
import { TestNotices } from './ui/TestNotices';
import { TestTextViewer } from './ui/TestTextViewer';
import { TestTabs } from './ui/TestTabs';

const Test = () => {
    const { t } = useTranslation();

    return (
        <>
            <title>{t(ROUTE_CONFIG.TEST.title)}</title>
            <h4>UI-Kit</h4>
            <Tabs
                items={[
                    {
                        key: 'TestIcons',
                        title: 'Icons',
                        Component: TestIcons,
                    },
                    {
                        key: 'TestTabs',
                        title: 'Tabs',
                        Component: TestTabs,
                    },
                    {
                        key: 'TestSpinners',
                        title: 'Spinners',
                        Component: TestSpinners,
                    },
                    {
                        key: 'TestAvatars',
                        title: 'Avatars',
                        Component: TestAvatars,
                    },
                    {
                        key: 'TestNotices',
                        title: 'Notices',
                        Component: TestNotices,
                    },
                    {
                        key: 'TestDropdowns',
                        title: 'Dropdowns',
                        Component: TestDropdowns,
                    },
                    {
                        key: 'TestActions',
                        title: 'Actions',
                        Component: TestActions,
                    },
                    {
                        key: 'TestCards',
                        title: 'Cards',
                        Component: TestCards,
                    },
                    {
                        key: 'TestInputs',
                        title: 'Inputs',
                        Component: TestInputs,
                    },
                    {
                        key: 'TestTextViewer',
                        title: 'Text View',
                        Component: TestTextViewer,
                    },
                    {
                        key: 'TestMessage',
                        title: 'Message',
                        Component: TestMessage,
                    },
                    {
                        key: 'TestButtons',
                        title: 'Buttons',
                        Component: TestButtons,
                    },
                    {
                        key: 'TestCircleButtons',
                        title: 'Circle Buttons',
                        Component: TestCircleButtons,
                    },
                ]}
            />

            <h4>For Messenger</h4>
            <Tabs
                items={[
                    {
                        key: 'TestMessage',
                        title: 'Message',
                        Component: TestMessage,
                    },
                ]}
            />
        </>
    );
};

export default Test;

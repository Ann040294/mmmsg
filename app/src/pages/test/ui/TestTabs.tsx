import { Layout, Tabs } from 'ui-kit';

const HW = () => <h3> HELLO WORLD!</h3>;

export const TestTabs = () => {
    return (
        <Layout>
            <Tabs
                items={[
                    {
                        key: '1',
                        title: 'title 1',
                        Component: HW,
                    },
                    {
                        key: '2',
                        title: 'title 2',
                        Component: HW,
                    },
                    {
                        key: '3',
                        title: 'title 3',
                        Component: HW,
                    },
                ]}
            />

            <Tabs
                alignItems={'center'}
                items={[
                    {
                        key: '1',
                        title: 'title',
                        Component: HW,
                    },
                ]}
            />
            <Tabs
                alignItems={'right'}
                items={[
                    {
                        key: '1',
                        title: 'title',
                        Component: HW,
                    },
                ]}
            />
        </Layout>
    );
};

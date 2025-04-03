import { FC } from 'react';
import MessageTwoTone from '@ant-design/icons/MessageTwoTone';

import { Layout } from 'ui-kit';

import { Navbar } from '@widgets/Navbar';

import Filler from '@shared/ui/Filler/Filler';

import { defaultConfig } from './config/defaultConfig';
import CustomOutlet from './CustomOutlet/CustomOutlet';
import { CustomOutletNames } from './CustomOutlet/types';

import css from './layout.module.scss';

const LayoutPage: FC = () => {
    return (
        <div className={css.root}>
            <Layout
                hasGradient
                className={css.navbar}
            >
                <Navbar options={defaultConfig} />
            </Layout>
            <Layout className={css.left}>
                <CustomOutlet name={CustomOutletNames.FIRST} />
            </Layout>
            <Layout>
                <CustomOutlet
                    name={CustomOutletNames.SECOND}
                    NotFoundFilled={
                        <Filler
                            title={'PieChat'}
                            icon={MessageTwoTone}
                            description={
                                'Спасибо за интерес к нашему мессенджеру!'
                            }
                        />
                    }
                />
            </Layout>
        </div>
    );
};

export default LayoutPage;

import { FC, useCallback, useState } from 'react';
import cn from 'classnames';

import { Tab } from './types';

import css from './Tabs.module.scss';

interface TabsProps {
    items: Array<Tab>;
    alignItems?: 'left' | 'center' | 'right';
}

const Tabs: FC<TabsProps> = ({ items, alignItems }) => {
    const [activeTabI, setActiveTabI] = useState<number>(0);

    const handleClickTab = useCallback((index) => {
        setActiveTabI(index);
    }, []);

    const Comp = items.at(activeTabI)?.Component;

    if (!items || !items.length) {
        return null;
    }

    return (
        <div className={css.container}>
            <div
                style={{ alignItems }}
                className={cn(css.transition)}
            >
                {items.map((tab, index) => (
                    <div
                        key={tab.key}
                        onClick={() => handleClickTab(index)}
                        className={cn(css.tab, {
                            [css.active]: activeTabI === index,
                        })}
                    >
                        {tab.title}
                    </div>
                ))}
            </div>
            {Comp && (
                <div className={css.content}>
                    <Comp />
                </div>
            )}
        </div>
    );
};

export default Tabs;

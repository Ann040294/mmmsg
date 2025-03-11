import { FC, useCallback } from 'react';
import AccountBookTwoTone from '@ant-design/icons/AccountBookTwoTone';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { Icon, IconButton, Layout } from 'ui-kit';
import { IconButtonSize } from 'ui-kit/IconButton';

export const TestIcons: FC = () => {
    const handleOnClickFake = useCallback(() => alert('test click'), []);

    return (
        <Layout>
            Icons :
            <Icon icon={SearchOutlined} />
            <Icon icon={AccountBookTwoTone} />
            <br />
            IconButton;
            <IconButton
                icon={AccountBookTwoTone}
                size={IconButtonSize.EXTRA_SMALL}
                onClick={handleOnClickFake}
            />
            <IconButton
                icon={SearchOutlined}
                size={IconButtonSize.SMALL}
            />
            <IconButton
                icon={AccountBookTwoTone}
                size={IconButtonSize.MEDIUM}
                onClick={handleOnClickFake}
            />
            <IconButton
                icon={AccountBookTwoTone}
                size={IconButtonSize.LARGE}
                onClick={handleOnClickFake}
            />
            <IconButton
                icon={AccountBookTwoTone}
                isDisabled={true}
                size={IconButtonSize.LARGE}
                onClick={handleOnClickFake}
            />
        </Layout>
    );
};

import { FC } from 'react';
import { Icon, Layout } from 'ui-kit';
import AccountBookTwoTone from '@ant-design/icons/AccountBookTwoTone';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import IconButton from 'ui-kit/IconButton/IconButton';

export const TestIcons: FC = () => {
    return (
        <Layout>
            Icons :
            <Icon icon={SearchOutlined} />
            <Icon icon={AccountBookTwoTone} />
            <br/>
            IconButton;

            <IconButton icon={SearchOutlined}/>
            <IconButton icon={AccountBookTwoTone} onClick={()=>alert('click')}/>
            isDisabled
            <IconButton icon={AccountBookTwoTone} isDisabled={true} onClick={()=>alert('click')}/>
        </Layout>
    );
};

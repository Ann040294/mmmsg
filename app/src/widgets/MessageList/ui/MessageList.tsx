import { FC } from 'react';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import { Card, Input } from 'ui-kit';
import { InputVariants } from 'ui-kit/Input';

const MessageList: FC = () => {
    return (
        <div>
            <Input
                variant={InputVariants.FILLED}
                placeholder={'Поиск...'}
                iconLeft={SearchOutlined}
            />
            <Card
                title={'Pie Chat'}
                description={'How are you doing?'}
                avatarSrc={
                    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f8/5c/05/picture-lake.jpg?w=900&h=500&s=1'
                }
            />
            <Card
                title={'Pie Chat'}
                description={'How are you doing?'}
                avatarSrc={
                    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f8/5c/05/picture-lake.jpg?w=900&h=500&s=1'
                }
            ></Card>
            <Card
                title={'Pie Chat'}
                description={'How are you doing?'}
                avatarSrc={
                    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f8/5c/05/picture-lake.jpg?w=900&h=500&s=1'
                }
            ></Card>
            <Card
                title={'Pie Chat'}
                description={'How are you doing?'}
                avatarSrc={
                    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f8/5c/05/picture-lake.jpg?w=900&h=500&s=1'
                }
            ></Card>
            <Card
                title={'Pie Chat'}
                description={'How are you doing?'}
                avatarSrc={
                    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f8/5c/05/picture-lake.jpg?w=900&h=500&s=1'
                }
            ></Card>
            <Card
                title={'Pie Chat'}
                description={'How are you doing?'}
                avatarSrc={
                    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f8/5c/05/picture-lake.jpg?w=900&h=500&s=1'
                }
            ></Card>
            <Card
                title={'Pie Chat'}
                description={'How are you doing?'}
                avatarSrc={
                    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f8/5c/05/picture-lake.jpg?w=900&h=500&s=1'
                }
            ></Card>
            <Card
                title={'Pie Chat'}
                description={'How are you doing?'}
                avatarSrc={
                    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/f8/5c/05/picture-lake.jpg?w=900&h=500&s=1'
                }
            ></Card>
        </div>
    );
};

export default MessageList;

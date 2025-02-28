import { FC } from 'react';

import { Avatar, Layout } from 'ui-kit';
import { AvatarShapes, AvatarSizes } from 'ui-kit/Avatar';

import { avatar1, avatar2 } from './meta/avatars';

export const TestAvatars: FC = () => {
    return (
        <Layout>
            <h5>src</h5>
            <h6>nope</h6>
            <Avatar />
            <h6>@</h6>
            <Avatar src={'@'} />
            <h6>base64</h6>
            <Avatar src={avatar1} />
            <h6>net</h6>
            <Avatar src={avatar2} />
            <h5>shape</h5>
            <Avatar shape={AvatarShapes.CIRCLE} />
            <Avatar shape={AvatarShapes.SQUARE} />
            <h6>def</h6>
            <Avatar />
            <h5>size</h5>
            <Avatar
                src={avatar2}
                size={AvatarSizes.SMALL}
            />
            <Avatar
                src={avatar2}
                size={AvatarSizes.MEDIUM}
            />
            <Avatar
                src={avatar2}
                size={AvatarSizes.LARGE}
            />
            <h6>def</h6>
            <Avatar />
        </Layout>
    );
};

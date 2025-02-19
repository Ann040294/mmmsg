import { FC } from 'react';
import { Card, Layout } from 'ui-kit';

import { avatar1 } from '../meta/avatars';

import css from '../style.module.scss';

export const TestCards: FC = () => {
    return (
        <Layout className={css.layout}>
            <Card
                title="ломаный src"
                description="description"
                avatarSrc={'description'}
            />
            <Card
                title="без badge"
                description="description"
                avatarSrc={avatar1}
            />
            <Card
                title={'без описания'}
                avatarSrc={avatar1}
            />
            <Card
                isHiddenAvatar
                title={'без описания и аватарки с указанием src'}
                avatarSrc={avatar1}
            />
            <Card
                isHiddenAvatar
                title={'без описания и аватарки с указанием src;badge'}
                badge={'123'}
            />
            <Card
                isHiddenAvatar
                title={'без аватарки'}
                description={'test'}
            />
            <Card
                isHiddenAvatar
                title={'без аватарки с badge'}
                description={'test'}
                badge={'123'}
            />
            <Card
                title={'с аватаркой, без описания'}
                avatarSrc={avatar1}
            />
            <Card
                title={'без передачи src; badge'}
                badge={'123'}
            />
            <Card
                title={'без передачи src'}
                description={'test'}
            />
            <Card
                title={'заполнен полностью'}
                description={'test'}
                badge={'123'}
                avatarSrc={avatar1}
            />
            <Card
                title={'пустая строка в src'}
                description={'test'}
                badge={'123'}
                avatarSrc={''}
            />
            <Card
                title={'ломаный src; badge'}
                description={'test'}
                badge={'123'}
                avatarSrc={'description'}
            />
            <Card
                title={'ломанная ссылка в src;'}
                description={'test'}
                badge={'123'}
                avatarSrc={
                    'https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385'
                }
            />
            <Card
                description={avatar1}
                badge={'123'}
                title={'три точки в конце три точки в конце три точки в конце'}
                avatarSrc={
                    'https://png.pn g tree.c om/thumb_back/fw 800/background /20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385'
                }
            />
        </Layout>
    );
};

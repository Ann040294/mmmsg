import React from 'react';
import ReactDOM from 'react-dom/client';
import {AvatarShapes, AvatarSizes} from "ui-kit/Avatar";
import {Item} from "ui-kit";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div style={{width: '500px'}}>
            <Item
                avatarProps={{
                    src: 'https://fotoblik.ru/wp-content/uploads/2023/09/kogda-liudi-ukhodiat-otpuskai-sudba-2.webp',
                    alt: '',
                    size: AvatarSizes.large,
                    shape: AvatarShapes.circle
                }}
                title={'Test Testovich1'}
                description={'How Are you?'}
                badge={'12'}
                hasAvatar
            />
        </div>

    </React.StrictMode>,
);

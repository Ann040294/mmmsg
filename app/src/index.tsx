import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChatItem} from "ui-kit";
import {AvatarSizes} from "ui-kit/Avatar/Avatar";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div style={{width: '360px'}}>
            <ChatItem
                avatarProps={{
                    src: 'https://fotoblik.ru/wp-content/uploads/2023/09/kogda-liudi-ukhodiat-otpuskai-sudba-2.webp',
                    alt: '',
                    sizes: AvatarSizes.large,
                }}
                nameChat={'Test Testovich1 '}
                message={'How Are you?'}
                time={'12:32'}
                countUnreadMessages={1}
            />
        </div>

    </React.StrictMode>,
);

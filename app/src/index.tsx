import React from 'react';
import ReactDOM from 'react-dom/client';
import {ItemChat} from "ui-kit";
import {SizesAvatar} from "ui-kit/Avatar/Avatar";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div style={{width: '360px', height: '300px'}}>

            <ItemChat avatarProps={{
                src: 'https://fotoblik.ru/wp-content/uploads/2023/09/kogda-liudi-ukhodiat-otpuskai-sudba-2.webp',
                alt: '',
                sizes: SizesAvatar.large, /*TODO: Type sizesAvatar.large is not assignable to type undefined, хотя по типам всё сходится*/
            }} nameChat={'Test Testovich1 '}
                      message={'How Are you?'}
                      time={'12:32'}
                      countUnreadMessages={1}/>
        </div>

    </React.StrictMode>,
);

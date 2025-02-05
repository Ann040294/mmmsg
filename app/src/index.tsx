import React from 'react';
import ReactDOM from 'react-dom/client';
import {ItemChat} from "ui-kit";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div style={{width: '360px', height: '300px'}}>

            <ItemChat avatarProps={{
                src: 'https://fotoblik.ru/wp-content/uploads/2023/09/kogda-liudi-ukhodiat-otpuskai-sudba-2.webp',
                alt: '',
                sizes: 'large',
            }} nameChat={'Test Testovich1 Test Testovich1Test Testovich1Test Testovich1Test Testovich1'}
                      message={'How Are you?How Are youHow Are youHow Are youHow Are youHow Are you'}
            time={'12:32'}
            countUnreadMessages={1}/>
        </div>

    </React.StrictMode>,
);

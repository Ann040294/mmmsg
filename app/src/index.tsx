import React from 'react';
import ReactDOM from 'react-dom/client';

import './shared/i18n';

import App from './app/App';

import '@app/style/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

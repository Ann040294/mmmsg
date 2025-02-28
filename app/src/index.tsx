import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app/App';

import '../src/app/style/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

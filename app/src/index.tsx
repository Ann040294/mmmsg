import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Input } from 'ui-kit';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

import Notice from 'ui-kit/Notice'; // Импорт компонента Message

const App = () => {
    const [value, setValue] = useState('');
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleValidate = () => {
        if (!value.trim()) {
            setHasError(true);
            setErrorMessage('This field cannot be empty');
        } else {
            setHasError(false);
            setErrorMessage('');
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Test Inputs</h1>
            <Input
                variant="fullfield"
                placeholder="Search..."
                value={value}
                iconLeft={<SearchOutlined />}
                onChange={handleChange}
            />
            <br />
            <Input
                variant="inputWithLabel"
                placeholder="Type your message..."
                label="Username"
                value={value}
                hasError={hasError}
                onChange={handleChange}
            />
            {hasError && errorMessage && (
                <Notice
                    type="error"
                    message={errorMessage}
                />
            )}
            <button onClick={handleValidate}>Validate</button>{' '}
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

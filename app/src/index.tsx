import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Input, InputVariants } from 'ui-kit';
import SearchOutlined from '@ant-design/icons/SearchOutlined';

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
    console.log(hasError);

    return (
        <div style={{ padding: 20 }}>
            <h1>Test Inputs</h1>
            <Input
                label={''}
                variant={InputVariants.FILLED}
                placeholder="Search..."
                value={value}
                iconLeft={<SearchOutlined />}
                iconRight={<SearchOutlined />}
                onChange={handleChange}
            />
            <br />
            <Input
                variant={InputVariants.OUTLINED}
                placeholder="Type your message..."
                label="Username"
                value={value}
                hasError={hasError}
                message={errorMessage}
                onChange={handleChange}
            />
            <button onClick={handleValidate}>Validate</button>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

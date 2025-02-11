import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import { Input } from "ui-kit";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Username is required");

  const handleSubmit = () => {
    if (inputValue.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Test Input with Error Message</h1>

      <Input
        label="Username"
        placeholder="Enter your username"
        hasError={error}
        errorMessage={errorMessage}
        value={inputValue}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

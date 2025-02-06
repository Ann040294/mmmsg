import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import { Input } from "ui-kit";

const App = () => {
  // Объявляем состояние для displayName и error
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Input
        label="Display name"
        placeholder="Enter Name Here"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <br />
      <br />
      <Input
        type="search"
        label="Search"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

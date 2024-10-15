import React, { useState } from 'react';
import Login from './Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'WOODLAWNBCPS' && password === 'password') {
      setIsAuthenticated(true);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {isAuthenticated ? (
        <h1 className="text-2xl font-bold">Welcome to the Protected Area</h1>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;

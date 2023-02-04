import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  token: null,
  handleLogin: () => {},
  handleRegister: () => {},
  handleLogout: () => {}
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('access');
    if (accessToken) {
      setToken(accessToken);
      setIsAuthenticated(true);

    }
  }, []);

  const handleLogin = (accessToken) => {
    localStorage.setItem('access', accessToken);
    setToken(accessToken);
    setIsAuthenticated(true);
   setUser(localStorage.getItem('user_id'));
  };

  const handleRegister = (accessToken) => {
    localStorage.setItem('access', accessToken);
    setToken(accessToken);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('access');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        token,
        handleLogin,
        handleRegister,
        handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

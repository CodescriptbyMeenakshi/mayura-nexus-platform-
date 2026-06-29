import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem('mayura_admin_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (username, password) => {
    // Demonstration credentials verification for UI testing phase
    if (username === 'admin' && password === 'admin123') {
      const userData = { username: 'admin', role: 'Super Admin', token: 'mock-jwt-token-12345' };
      setUser(userData);
      sessionStorage.setItem('mayura_admin_user', JSON.stringify(userData));
      return { success: true };
    }
    return { success: false, message: 'Invalid username or password credentials' };
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('mayura_admin_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

import { createContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    // perform login logic
    setLoggedIn(true);
  }

  function logout() {
    // perform logout logic
    setLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
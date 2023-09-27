import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});


function AuthProvider({ children }) {
    const [data, setData] = useState({});
    return (
        <AuthContext.Provider value={{
          Home
        }}>
          {children}
        </AuthContext.Provider>
      )
    }


function useAuth() {
    const context = useContext(AuthContext);
  
    return context;
  }
  export { AuthProvider, useAuth }
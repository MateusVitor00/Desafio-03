import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home/';

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
    );
}

export function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{
          Home
        }}>
          {children}
        </AuthContext.Provider>
      )
    }
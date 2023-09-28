import { useContext } from 'react';
import { AuthContext } from '../context/myContext';

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
  
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContexts';

// Autenticação em vários contextos
export function useAuth() {
  const value = useContext(AuthContext)

  return value;
}
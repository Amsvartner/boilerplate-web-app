import { useContext } from 'react';
import { AuthContext, AuthContextState } from '../AuthContext';

export const useAuthContext = (): AuthContextState => {
  const authContext = useContext(AuthContext);
  if (authContext) {
    return authContext;
  } else {
    throw new Error('Use only from children of AuthContext');
  }
};

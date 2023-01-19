import { useContext } from 'react';
import { UserContext, UserContextState } from './UserContext';

export const useUserContext = (): UserContextState => {
  const userContext = useContext(UserContext);
  if (userContext) {
    return userContext;
  } else {
    throw new Error('Use only from children of UserContext');
  }
};

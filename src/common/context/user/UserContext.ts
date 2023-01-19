import { createContext } from 'react';
import { Maybe } from '../../type/Maybe';

export type UserContextState = {
  name: Maybe<string>;
  email: Maybe<string>;
  // TODO: Add more stuff here when needed..
};

export const UserContext = createContext<Maybe<UserContextState>>(undefined);

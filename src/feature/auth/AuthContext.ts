import { createContext } from 'react';
import { Maybe } from '../../common/type/Maybe';

export type AuthContextState = {
  email?: Maybe<string>; // TODO: Better identifier
};

export const AuthContext = createContext<Maybe<AuthContextState>>(undefined);

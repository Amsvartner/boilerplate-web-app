import { AuthContext, AuthContextState } from './AuthContext';
import { FC } from 'react';

type Props = {
  state: AuthContextState;
  children?: React.ReactNode;
};

export const AuthContextProvider: FC<Props> = ({ state, children }) => (
  <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
);

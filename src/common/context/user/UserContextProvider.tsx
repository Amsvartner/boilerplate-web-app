import { UserContext, UserContextState } from './UserContext';
import { FC } from 'react';

type Props = {
  state: UserContextState;
  children?: React.ReactNode;
};

export const UserContextProvider: FC<Props> = ({ state, children }) => (
  <UserContext.Provider value={state}>{children}</UserContext.Provider>
);

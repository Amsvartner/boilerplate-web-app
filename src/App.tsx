import React, { FC } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import { AuthContextProvider } from './feature/auth/AuthContextProvider';
import { Authenticator } from '@aws-amplify/ui-react';
import { AppRoutes } from './feature/navigation/AppRoutes';

Amplify.configure(awsExports);

const App: FC = () => (
  <Authenticator>
    {({ signOut, user }): JSX.Element => (
      <AuthContextProvider state={{ email: user?.attributes?.email }}>
        <AppRoutes signOut={signOut} />
      </AuthContextProvider>
    )}
  </Authenticator>
);

export default App;

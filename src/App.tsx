import React, { FC } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import { UserContextProvider } from './common/context/user/UserContextProvider';

Amplify.configure(awsExports);

const App: FC = () => (
  <Authenticator>
    {({ signOut, user }): JSX.Element => (
      <UserContextProvider state={{ name: user?.username, email: user?.attributes?.email }}>
        <div className='App'>
          <h2>Welcome, {user?.username}</h2>
          <button onClick={signOut}>Sign out</button>
        </div>
      </UserContextProvider>
    )}
  </Authenticator>
);

export default App;

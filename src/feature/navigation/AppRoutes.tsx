import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from '../landing/container/LandingPage';
import { SettingsPage } from '../settings/container/SettingsPage';
import { FC } from 'react';
import { NavBar } from './container/NavBar';
import { AppPath } from './AppPath';

type AppRoutesProps = {
  signOut?: () => void;
};
export const AppRoutes: FC<AppRoutesProps> = ({ signOut }) => (
  <BrowserRouter>
    <Routes>
      <Route element={<NavBar signOut={signOut} />}>
        <Route path={AppPath.LANDING} element={<LandingPage />} />
        <Route path={AppPath.SETTINGS} element={<SettingsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

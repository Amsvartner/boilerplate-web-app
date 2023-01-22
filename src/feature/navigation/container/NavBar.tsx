import {
  AppBar,
  Grid,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FC, useState, MouseEvent } from 'react';
import { Home, Logout, Settings } from '@mui/icons-material';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppPath } from '../AppPath';

type Props = {
  signOut?: () => void;
};

export const NavBar: FC<Props> = ({ signOut }) => {
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>): void => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElMenu(null);
  };

  return (
    <>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Header
          </Typography>
          <IconButton edge='start' color='inherit' aria-label='menu' onClick={handleOpenNavMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            open={!!anchorElMenu}
            anchorEl={anchorElMenu}
            onClose={handleCloseNavMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
          >
            <MenuItem onClick={(): void => navigate(AppPath.LANDING)}>
              <ListItemIcon>
                <Home fontSize='small' />
              </ListItemIcon>
              Home
            </MenuItem>

            <MenuItem onClick={(): void => navigate(AppPath.SETTINGS)}>
              <ListItemIcon>
                <Settings fontSize='small' />
              </ListItemIcon>
              Settings
            </MenuItem>

            <MenuItem onClick={signOut}>
              <ListItemIcon>
                <Logout fontSize='small' />
              </ListItemIcon>
              Sign out
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Grid container px={3} py={2}>
        <Outlet />
      </Grid>
    </>
  );
};

import React from 'react';
import Box from '@mui/material/Box';
import { AppBar, Button, Menu, MenuItem, Toolbar } from '@mui/material';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import MuiListItemAvatar from '@mui/material/ListItemAvatar';
import { styled } from '@mui/material/styles';

const TopMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const ListItemAvatar = styled(MuiListItemAvatar)({
    minWidth: 0,
    marginRight: 12,
  });


  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
        <Toolbar>
            {/* Left side content */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <MenuItem value="" sx={{ border: '1px solid #80808026' }}>
                <ListItemAvatar>
                  <Avatar alt="Tours">
                    <DevicesRoundedIcon sx={{ fontSize: '1rem' }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Tours" secondary="Web app" />
              </MenuItem>
            </Box>
              {/* Right side content (buttons) */}
            <Box sx={{ display: 'flex', ml: 'auto' }}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit" onClick={handleMenuClick}>
                  More
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                </Menu>
            </Box>
        </Toolbar>
     </AppBar>
  );
};

export default TopMenu;

import Stack from '@mui/material/Stack';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import CustomDatePicker from './CustomDatePicker';
import Avatar from '@mui/material/Avatar';
import MenuButton from './MenuButton';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { PaletteMode } from '@mui/material/styles';
import Search from './Search';
import ToggleColorMode from './ToggleColorMode';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import MuiListItemAvatar from '@mui/material/ListItemAvatar';
import { styled } from '@mui/material/styles';

export default function Header({ toggleColorMode, mode }: { toggleColorMode: () => void; mode: PaletteMode }) {
  const ListItemAvatar = styled(MuiListItemAvatar)({
    minWidth: 0,
    marginRight: 12,
  });

  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      {/*<NavbarBreadcrumbs />*/}
      <MenuItem value="" sx={{ border: '1px solid #80808026' }}>
        <ListItemAvatar>
          <Avatar alt="Tours">
            <DevicesRoundedIcon sx={{ fontSize: '1rem' }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Tours" secondary="Web app" />
      </MenuItem>
      <Stack direction="row" sx={{ gap: 1 }}>
        <Search />
        <CustomDatePicker />
        <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton>
        <ToggleColorMode
          data-screenshot="toggle-mode"
          mode={mode}
          toggleColorMode={toggleColorMode}
        />
        <Button variant="outlined" sx={{ height: '36px' }}><Link style={{ textDecoration: 'none' }} to="/login">SING IN</Link></Button>
      </Stack>
    </Stack>
  );
}

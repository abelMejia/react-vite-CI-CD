import Stack from '@mui/material/Stack';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import CustomDatePicker from './CustomDatePicker';
import MenuButton from './MenuButton';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { PaletteMode } from '@mui/material/styles';
import Search from './Search';
import ToggleColorMode from './ToggleColorMode';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';

export default function Header({ toggleColorMode, mode }: { toggleColorMode: () => void; mode: PaletteMode }) {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'flex', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        height: '140px',
        paddingTop: '80px',
        '@media (min-width: 900px)': {
          paddingTop: '80px',  // Ajusta el padding según lo necesites
        },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs />
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

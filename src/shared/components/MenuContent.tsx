import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { Link } from 'react-router-dom';
import React from 'react';
import { ListItem } from '@mui/material';

const mainListItems: { id: number, text: string; icon: any, link?: string }[] = [
  { id: 1, text: 'Home', icon: <HomeRoundedIcon />, link: '/'  },
  { id: 2, text: 'Analytics', icon: <AnalyticsRoundedIcon /> },
  { id: 3, text: 'Clients', icon: <PeopleRoundedIcon /> },
  { id: 4, text: 'Tasks', icon: <AssignmentRoundedIcon /> },
];

const secondaryListItems: { id: number, text: string; icon: any, link?: string }[] = [
  { id: 5, text: 'Settings', icon: <SettingsRoundedIcon />},
  { id: 6, text: 'About', icon: <InfoRoundedIcon />, link: '/about'},
  { id: 7, text: 'Feedback', icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
  const [selectedItem, setSelectedItem] = React.useState(null);
  const handleClick = (item: any) => {
    setSelectedItem(item);
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
          {mainListItems.map((item) => {
            return (
              <ListItem
                  key={item.id}
                  disablePadding
                  sx={{ display: 'block' }}
                  component={Link}
                  to={item?.link || '#'} // Usa '#' como enlace predeterminado
                >
                  <ListItemButton
                    selected={item.id === selectedItem}
                    onClick={() => handleClick(item.id)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
            )}
        )}
      </List>

      <List dense>
        {secondaryListItems.map((item: any, index: number) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }} component={Link} to={item?.link}>
            <ListItemButton selected={item.id === selectedItem}  onClick={() => handleClick(item.id)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}

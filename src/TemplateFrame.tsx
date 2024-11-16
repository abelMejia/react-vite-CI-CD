import * as React from 'react';
import {
  createTheme,
  ThemeProvider,
  PaletteMode
} from '@mui/material/styles';
import Box from '@mui/material/Box';
import getDashboardTheme from './theme/getDashboardTheme';
import { alpha } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import SideMenu from '@components/SideMenu';
import AppNavbar from '@components/AppNavbar';
import { GeneralComponentsEnum } from './enums/general-componentes.enum';
import Header from '@components/Header';
import TopMenu from '@components/TopMenu';

interface TemplateFrameProps {
  showCustomTheme: boolean;
  toggleCustomTheme: (theme: boolean) => void;
  mode: PaletteMode;
  toggleColorMode: () => void;
  children: React.ReactNode;
  pathname: string;
}

export default function TemplateFrame({
  mode,
  toggleColorMode,
  children,
  pathname
}: TemplateFrameProps) {
  const dashboardTheme = createTheme(getDashboardTheme(mode));
  const shouldRenderComponent = (component: string) => permissions[pathname] &&
      permissions[pathname].includes(component)

  const permissions: { [key: string]: any } = {
      '/login': ['sideMenu', 'appNavbar', 'header', 'topMenu'],
      '/': ['sideMenu'],
      '/signUp': ['sideMenu', 'appNavbar', 'header', 'topMenu']
  }

  return (
    <ThemeProvider theme={dashboardTheme}>
      <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flex: '1 1', overflow: 'auto' }}>{
            <Box sx={{ display: 'flex' }}>
                {!shouldRenderComponent(GeneralComponentsEnum.SideMenu) && <SideMenu />}
                {!shouldRenderComponent(GeneralComponentsEnum.AppNavbar) && <AppNavbar />}
                {!shouldRenderComponent(GeneralComponentsEnum.AppNavbar) && <TopMenu />}

                <Box
                  component="main"
                  sx={(theme) => ({
                    flexGrow: 1,
                    backgroundColor: alpha(theme.palette.background.default, 1),
                    overflow: 'auto',
                  })}
                >
                  <Stack
                    spacing={2}
                    sx={{
                      alignItems: 'center',
                      mx: 3,
                      pb: 10,
                      mt: { xs: 8, md: 0 },
                    }}
                  >
                    {!shouldRenderComponent(GeneralComponentsEnum.AppNavbar) && <Header toggleColorMode={toggleColorMode} mode={mode}/>}
                    {children}
                  </Stack>
                </Box>
          </Box>
        }</Box>
      </Box>
    </ThemeProvider>
  );
}

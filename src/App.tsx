import './App.css'
import '@fontsource/roboto';
import * as React from 'react';
import {
  PaletteMode,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import TemplateFrame from './TemplateFrame';
import getDashboardTheme from './theme/getDashboardTheme';
import { Routes, Route, Outlet, useLocation, useNavigationType } from 'react-router-dom';
import NoMatch from './NoMatch';
import { modules } from './shared/helpers/routes.helper';
import { deletePost, getPostById, getPosts, savePost, updatePost } from '@services/post-service';

const App = () =>  {

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await getPosts();
        console.log('post', posts)
        const post = await getPostById(100);
        console.log('post by Id', post)

        const payload = {
          title: 'foo',
          body: 'bar',
          userId: 1,
        }

        const newPost = await savePost(payload);
        console.log('newPost', newPost)

        const otherPayload = {
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }

        const update = await updatePost(1, otherPayload);
        console.log('update', update)


        const remove = await deletePost(1);
        console.log('remove', remove)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <Routes>
      <Route path="/" element={<Layout />}>
        {modules.globalRoutes()?.map(({ name, path, module: Module, loader }: {
          name: string; path: string; module: React.ComponentType<React.SuspenseProps>, loader?: any
        }, key: number) => (
          <Route
            path={path}
            key={`${key}-${name}`}
            element={
              <React.Suspense fallback={<>...</>}>
                <Module />
              </React.Suspense>
            }
            {...(loader ? { loader } : {})}
          />
        ))}
      </Route>
      <Route path="*" element={<NoMatch />} />
  </Routes>
}

function Layout() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const dashboardTheme = createTheme(getDashboardTheme(mode));
  const defaultTheme = createTheme({ palette: { mode }});
  const [pathname, setPathname] = React.useState<string>('/')
  const location = useLocation();
  const navigationType = useNavigationType(); // hook para obtener el tipo de navegación

  React.useEffect(() => {
    console.log('Tipo de navegación:', navigationType);
    console.log('Ruta actual:', location.pathname);
    console.log('location', location);
    setPathname(location.pathname)
  }, [location, navigationType]);

  // This code only runs on the client side, to determine the system color preference
  React.useEffect(() => {
    // Check if there is a preferred mode in localStorage
    const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
    if (savedMode) {
      setMode(savedMode);
    } else {
      // If no preference is found, it uses system preference
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode); // Save the selected mode to localStorage
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return <TemplateFrame
      toggleCustomTheme={toggleCustomTheme}
      showCustomTheme={showCustomTheme}
      mode={mode}
      pathname={pathname}
      toggleColorMode={toggleColorMode}
    >
        <ThemeProvider theme={showCustomTheme ? dashboardTheme : defaultTheme}>
            <Outlet />
        </ThemeProvider>
   </TemplateFrame>
}

export default App

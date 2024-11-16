import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './store/store';
import { Provider } from 'react-redux'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContextProvider } from "./theme/ThemeContextProvider";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
          <CssBaseline />
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </ThemeContextProvider>
    </Provider>
  </StrictMode>,
)

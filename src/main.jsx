import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';
import Layout from './layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/home';
import ProjectPage from './pages/project';
import AboutPage from './pages/about';
import WeatherPage from './pages/weather';
import Currency from './pages/Currency';
import { AppContextProvider } from './components/context/app.context';
import './i18n';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/project",
        element: <ProjectPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/weather",
        element: <WeatherPage />,
      },
      {
        path: "/currency",
        element: <Currency />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>,
);

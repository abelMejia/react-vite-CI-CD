import * as React from "react";

// eslint-disable-next-line react-refresh/only-export-components
const Home = React.lazy(() => import("@pages/Home"));

export const homeRoutes = () => [
  {
    name: "home",
    path: '/home',
    module: Home,
  }
]

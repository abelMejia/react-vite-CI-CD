import * as React from "react";

// eslint-disable-next-line react-refresh/only-export-components
const Dashboard = React.lazy(() => import("@pages/Dashboard"));

export const dashboardRoutes = () => [
  {
    name: "dashboard",
    path: '/',
    module: Dashboard
  }
]

import * as React from "react";

// eslint-disable-next-line react-refresh/only-export-components
const About = React.lazy(() => import("@pages/About"));

export const aboutRoutes = () => [
  {
    name: "about",
    path: '/about',
    module: About,
  }
]

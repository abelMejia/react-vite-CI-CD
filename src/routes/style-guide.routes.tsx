import * as React from "react";

// eslint-disable-next-line react-refresh/only-export-components
const StyleGuide = React.lazy(() => import("@pages/StyleGuide"));

export const styleGuideRoutes = () => [
  {
    name: "style-guide",
    path: '/style-guide',
    module: StyleGuide,
  }
]

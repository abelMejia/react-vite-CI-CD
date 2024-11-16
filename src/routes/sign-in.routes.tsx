import * as React from "react";

// eslint-disable-next-line react-refresh/only-export-components
const SingIn = React.lazy(() => import("@pages/SignIn"));

export const SingInRoutes = () => [
  {
    name: "login",
    path: '/login',
    module: SingIn,
  }
]

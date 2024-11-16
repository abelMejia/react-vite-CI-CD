import * as React from "react";

// eslint-disable-next-line react-refresh/only-export-components
const SignUp = React.lazy(() => import("@pages/SignUp"));

export const SingUpRoutes = () => [
  {
    name: "singUp",
    path: '/signUp',
    module: SignUp,
  }
]

import { aboutRoutes,  dashboardRoutes, homeRoutes, styleGuideRoutes, SingInRoutes, SingUpRoutes } from "@routes/index"

class Modules {
  globalRoutes() {
    return [
      ...SingInRoutes(),
      ...SingUpRoutes(),
      ...styleGuideRoutes(),
      ...homeRoutes(),
      ...aboutRoutes(),
      ...dashboardRoutes(),
    ]
  }
}

export const modules = new Modules()

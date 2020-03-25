export interface IRoute {
  path: string,
  displayName: string,
  active: boolean
}

const RouteAttributes = {
  dashboard: {
    path: "dashboard",
    displayName: "Dashboard"
  },
  home: {
    path: "home",
    displayName: "Home"
  },
  user: {
    path: "user",
    displayName: "User"
  }
}

export { RouteAttributes };

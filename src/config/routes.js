import { Home, Categories } from "../container/pages";

const routes = [
  {
    id: 1,
    path: "/home",
    component: Home,
    exact: true,
  },
  {
    id: 2,
    path: "/category/:category_name",
    component: Categories,
    exact: true,
  },
];

export default routes;

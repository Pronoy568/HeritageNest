import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../pages/Landing/Landing";
import About from "../pages/About/About";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;

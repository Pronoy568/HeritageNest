import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../pages/Landing/Landing";
import About from "../pages/About/About";
import BuyScreen from "../pages/BuyScreen/BuyScreen";

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
      {
        path: "/buyScreen",
        element: <BuyScreen />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;

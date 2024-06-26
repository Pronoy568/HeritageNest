import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Landing from "../pages/Landing/Landing";
import About from "../pages/About/About";
import BuyScreen from "../pages/BuyScreen/BuyScreen";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import SignIn from "../pages/SignIn/SignIn";

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
      {
        path: "/propertyDetails",
        element: <PropertyDetails />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;

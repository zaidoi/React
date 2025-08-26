import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./Profile/Profile";
import Spinach from "./Spinach/Spinach";
import Popeye from "./Popeye/Popeye";
import Error from "./Error/Error";
import routes from "./Routes";
import DefaultProfile from "./DefaultProfile/DefaultProfile";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

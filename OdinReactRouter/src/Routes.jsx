import App from "./App";
import Profile from "./Profile/Profile";
import Error from "./Error/Error";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
];

export default routes;

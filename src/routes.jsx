import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./Pages/Dashboard";
import MessageInbox from "./Pages/MessageInbox";
import Profile from "./Pages/Profile";
import AccountSettings from "./Pages/AccountSettings";
import Membership from "./Pages/Membership";
import MyProperty from "./Pages/MyProperty";
import AddProperty from "./Pages/AddProperty";
import Reviews from "./Pages/Reviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/message-inbox",
        element: <MessageInbox />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/account-settings",
        element: <AccountSettings />,
      },
      {
        path: "/membership",
        element: <Membership />,
      },
      {
        path: "/property-list",
        element: <MyProperty />,
      },
      {
        path: "/add-property",
        element: <AddProperty />
      },
      {
        path: "/reviews",
        element: <Reviews />
      }
    ],
  },
]);

export default router;

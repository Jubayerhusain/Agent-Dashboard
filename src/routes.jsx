import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <div>This is home page</div>,
      },
    ],
  },
]);

export default router;

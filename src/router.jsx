import { Outlet, createBrowserRouter } from "react-router-dom";
import ErrorRouterPage from "./ErrorRouterPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <><div>Home+Layout</div><Outlet/></>,
    errorElement: <ErrorRouterPage />,
    children: [
      {
        path: "contacts",
        element: <div>all contact</div>,
        children: [
          {
            path: "contacts/:contactId",
            element: <div>contact id n</div>,
          },
        ],
      },

    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import ErrorRouterPage from "./pages/ErrorRouterPage";
import Root from "./pages/Root";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
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

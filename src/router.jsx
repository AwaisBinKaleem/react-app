import { createBrowserRouter } from "react-router-dom";
import ErrorRouterPage from "./pages/ErrorRouterPage";
import Root from "./pages/Root";
import About from "./pages/About";

// Todo:private routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorRouterPage />,
    children: [
      {
        path: "/contacts",
        element: <div>all contact</div>,
      },
      {
        path: "/contacts/:contactId",
        element: <div>contact id n</div>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      
    ],
  },
]);

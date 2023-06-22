import { createBrowserRouter } from "react-router-dom";
import ErrorRouterPage from "./pages/ErrorRouterPage";
import App from "./pages/App";
import About from "./pages/About";

// Todo:private routes
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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

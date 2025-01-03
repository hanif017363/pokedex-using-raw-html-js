import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Favourite from "../pages/Favourite";
import Deck from "../pages/Deck";
import Root from "../pages/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <App /> },
      {
        path: "/favourite",
        element: <Favourite />,
      },
      {
        path: "/deck",
        element: <Deck />,
      },
    ],
  },
]);

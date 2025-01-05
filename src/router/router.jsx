import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Favourite from "../pages/Favourite";

import Root from "../pages/RootLayout";
import DetailPokemon from "../pages/DetailPokemon";

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
    ],
  },
  { path: "/pokemon/:postId", element: <DetailPokemon /> },
]);

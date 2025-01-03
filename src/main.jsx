import { createRoot } from "react-dom/client";

import AppProvider from "./context/AppCtx.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);

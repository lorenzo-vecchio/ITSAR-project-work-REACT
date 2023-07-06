import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthContext, AuthProvider } from "./contexts/AuthContext.jsx";
import { ReloadFavoritesProvider } from "./contexts/ReloadFavoritesContext.jsx";

import App from "./App.jsx";
import ContextProvider from "./contexts/ContextProvider.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthProvider>
    <ContextProvider>
      <ReloadFavoritesProvider>
        <App />
      </ReloadFavoritesProvider>
    </ContextProvider>
  </AuthProvider>
);

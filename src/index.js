import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthContext, AuthProvider } from "./contexts/AuthContext.jsx";

import App from "./App.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthProvider>
);

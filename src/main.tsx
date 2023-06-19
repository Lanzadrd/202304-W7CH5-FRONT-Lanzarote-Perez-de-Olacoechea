import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContextProvider } from "./context/app.context.provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Router>
  </React.StrictMode>
);

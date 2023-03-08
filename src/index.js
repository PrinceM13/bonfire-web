import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoadingContextProvider from "./context/LoadingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <LoadingContextProvider>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </LoadingContextProvider>
  </Provider>
);

// <React.StrictMode>
// </React.StrictMode>

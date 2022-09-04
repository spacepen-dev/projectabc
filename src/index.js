import React from "react";
import ReactDOM from "react-dom";
import { NotificationProvider } from "../src/notification/NotificationProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import reducer from "./reducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import reportWebVitals from "./reportWebVitals";
// import * as serviceWorkerRegistration from '../src/serviceWorkerRegistration'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);

// reportWebVitals()

import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App/App.js";
import { Provider } from "react-redux";
import store from "./redux/store";

import Profile from "./components/Profile"; //importing the Profile Component

//appending the Profile component to the element with id root

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Profile />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

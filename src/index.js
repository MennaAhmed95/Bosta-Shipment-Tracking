import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./i18n";
import { create } from "jss";
import rtl from "jss-rtl";
import App from "./App";
import appTheme from "./styles/appTheme";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";

import { ThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
ReactDOM.render(
  <Suspense fallback={<div>loading....</div>}>
    <React.StrictMode>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={appTheme}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </StylesProvider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

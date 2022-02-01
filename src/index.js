import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import App from "./App";
import store from "./redux/store";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "sourse sans pro", sans-serif;
  }

  body {
    background-color: #f2f2f2;
  }

  *::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #eee;
    box-shadow: 0 0 1px 1px #bbb, inset 0 0 7px rgba(0, 0, 0, 0.3)
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: linear-gradient(left, #96A6BF, #63738C);
    box-shadow: inset 0 0 1px 1px #5C6670;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(left, #8391A6, #536175);

  }
`;

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <>
                <Global/>
                <App/>
            </>
        </Provider>
    </HashRouter>,
    document.getElementById("root")
);

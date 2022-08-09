import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import store from "./redux/config/configStore";
import { Provider } from "react-redux";

// css
import "./index.css";

// Component
import App from "./App";
import Form from "./component/form/Form";

// Route
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    {/* Provider 위치 여기 맞는지? */}
  </>
);

//App을 Provider로 감싸주고, configStore에서 export default 한 store를 넣어줍니다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

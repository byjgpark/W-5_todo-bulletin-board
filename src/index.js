import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

// css
import "./index.css";

// Component
import App from "./App";
import Form from "./component/form/Form";
import Detail from "./component/detail/Detail";
import TodoList from "./component/todoList/TodoList";
import Comment from "./component/comment/Comment";

// Route
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/form" element={<Form/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/todoList" element={<TodoList/>}/>
        <Route path="/" element={<App />} />
        <Route path="/comment" element={<Comment />}/>
      </Routes>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

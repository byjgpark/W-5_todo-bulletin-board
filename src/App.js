import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./component/detail/Detail";
import TodoList from "./component/todoList/TodoList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

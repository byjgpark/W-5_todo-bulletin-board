import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getTodosThunk } from "../../redux/modules/todosSlice";
import Layout from "../style/Layout";
import Todo from "../todo/Todo";
import "./style.css";

export default function TodoList() {
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.todos);

  console.log(todos);

  useEffect(() => {
    dispatch(__getTodosThunk());
  }, [dispatch]);

  return (
    <>
      <div className="layout-list">
        <div className="nameoftitle">글 목록</div>
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />;
        })}
      </div>
    </>
  );
}

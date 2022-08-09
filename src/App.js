import React from "react";
import Router from "./shared/Router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { __getTodo } from "./redux/modules/todoSlice";
import "./App.css";
import Form from "./component/form/Form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getTodo());
  }, [dispatch]);

  // Store에 있는 todo 모듈 state 조회하기
  const todo = useSelector((state) => state.todo);

  return (
    <div>
      <div>
        <h1>B반 대나무숲</h1>
      </div>
      <div>
        <h1>무엇을 할까요?</h1>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/form");
          }}
        >
          게시글 등록하기
        </button>
        <button>게시글 목록</button>
      </div>
    </div>
  );
}
{
  /* <Router />; */
}
export default App;

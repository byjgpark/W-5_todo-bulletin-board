import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function App() {
  const navigate = useNavigate();
  return (
    <div className="maingroup">
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
        <button
          onClick={() => {
            navigate("/todolist");
          }}
        >
          게시글 목록
        </button>
      </div>
    </div>
  );
}
export default App;

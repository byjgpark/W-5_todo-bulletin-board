import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <MainLYT>
        <MainTI>B반 대나무숲</MainTI>
          <MainCon>
          <MainSubCon>
              <TodoTitle>무엇을 할까요?</TodoTitle>
              <TodoCon onClick={() => {
                  navigate("/form");
                }}>
                게시글 등록하기
              </TodoCon>
              <TodoCon
                onClick={() => {
                  navigate("/todolist");
                }}
              >
                게시글 목록
              </TodoCon>
          </MainSubCon>
        </MainCon>
      </MainLYT>
    </div>
  );
}
export default App;

const MainCon = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const MainLYT = styled.div`
  height: calc(100vh - 45px);
  background-color: rgb(255, 255, 255);
  padding: 24px;
`;

const MainSubCon = styled.div`
  margin-top: 24px;
  display: flex;
  -webkit-box-align: start;
  align-items: start;
  -webkit-box-pack: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;

const MainTI = styled.div`
  font-size: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TodoTitle = styled.div`
  font-size: 32px;
`

const TodoCon = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: row;
  padding: 0px 20px;
  width: 100%;
  height: 120px;
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  cursor: pointer;
  font-size: 23px;
`

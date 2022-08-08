import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Comment from "../comment/Comment"

export default function Detail() {
  const navigate = useNavigate();

  const initialState = [
    {
      id: 1,
      title: "ㅎㅇ",
      body: "ㅎㅇ",
    },

    {
      id: 2,
      title: "ㅎㅇ",
      body: "ㅎㅇ",
    },
  ];

  const [todo] = useState(initialState);
  const { id } = useParams();

  // console.log(todo);
  // console.log(id);

  let copy = todo.find((x) => x.id === Number(id));
  // console.log(copy);

  return (
    <>
      <Box2>
        <Box3>
          <div>id : {copy.id}</div>
          <BtnBox onClick={() => navigate(-1)}>이전으로</BtnBox>
        </Box3>
        <h1 style={{ marginLeft: "30px" }}>{copy.title}</h1>
        <main style={{ marginLeft: "30px" }}>{copy.body}</main>
        <div style={{ float: "right" }}>
          <BtnBox style={{ marginRight: "30px" }}>수정하기</BtnBox>
        </div>
      </Box2>
      <Comment></Comment>
    </>
  );
}

const Box2 = styled.div`
  width: 500px;
  height: 300px;
  border: 1px solid rgb(238, 238, 238);
`;
const Box3 = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0px 24px;
  align-items: center;
`;

const BtnBox = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;

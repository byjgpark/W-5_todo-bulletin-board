import { useState } from "react";
import styled from "styled-components";
import Todo from "../todo/Todo";

export default function TodoList() {
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

  return (
    <>
      <Container>내 할일</Container>
      <StContainer>
        {todo.map((todos) => {
          return <Todo todo={todos} key={todos.id} />;
        })}
      </StContainer>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 24px;
  font-size: 24px;
`;

const StContainer = styled.div`
  height: calc(100% - 45px - 48px);
`;

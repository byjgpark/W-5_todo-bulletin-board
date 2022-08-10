import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getTodosThunk } from "../../redux/modules/todosSlice";
import Layout from "../style/Layout";
import Todo from "../todo/Todo";

export default function TodoList() {
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.todos);

  console.log(todos);

  useEffect(() => {
    dispatch(__getTodosThunk());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Container>내 할일</Container>
        <StContainer>
          {todos.map((todo) => {
            return <Todo todo={todo} key={todo.id} />;
          })}
        </StContainer>
      </Layout>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 24px 0;
  font-size: 24px;
`;

const StContainer = styled.div`
  height: calc(100% - 45px - 48px);
`;

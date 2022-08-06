import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Todo(props) {
  const navigate = useNavigate();

  return (
    <>
      <StCard
        onClick={() => {
          navigate(`/detail/${props.todo.id}`);
        }}
      >
        <div>{props.todo.title}</div>
        <div>{props.todo.body}</div>
      </StCard>
    </>
  );
}

const StCard = styled.div`
  padding: 12px;
  height: 90px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 12px;
  width: 100%;
  margin-bottom: 12px;
`;

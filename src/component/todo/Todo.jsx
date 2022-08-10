import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __deleteTodoThunk } from "../../redux/modules/todosSlice";

export default function Todo(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickHandler = (event) => {
    event.stopPropagation();
    dispatch(__deleteTodoThunk(props.todo.id));
  };

  return (
    <>
      <StCard
        onClick={() => {
          navigate(`/detail/${props.todo.id}`);
        }}
      >
        <div>{props.todo.id}</div>
        <div>{props.todo.title}</div>
        <div>by {props.todo.nickname}</div>
        <button onClick={onClickHandler}>삭제하기</button>
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

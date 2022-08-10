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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: "20px" }}>{props.todo.title}</div>
          <button
            onClick={onClickHandler}
            style={{ background: "white", border: "none", fontSize: "25px" }}
          >
            🗑️
          </button>
        </div>
        <Container>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            nickname : {props.todo.nickname}
          </div>
        </Container>
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

const Container = styled.div`
  width: 100%;
  margin: 10px 0;
`;

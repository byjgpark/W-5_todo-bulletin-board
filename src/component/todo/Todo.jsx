import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __deleteTodoThunk } from "../../redux/modules/todosSlice";
import { VscTrash } from "react-icons/vsc";
import "./style.css";

export default function Todo(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickHandler = (event) => {
    event.stopPropagation();
    dispatch(__deleteTodoThunk(props.todo.id));
  };

  return (
    <>
      <div
        className="whole-list"
        onClick={() => {
          navigate(`/detail/${props.todo.id}`);
        }}
      >
        <div
          className="titleNicon"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ fontSize: "20px" }}>{props.todo.title}</div>
          <button
            onClick={onClickHandler}
            style={{
              background: "transparent",
              border: "none",
              fontSize: "25px",
            }}
          >
            🗑️
          </button>
        </div>
        <div className="content">{props.todo.content}</div>
        <div
          className="nickname"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          by {props.todo.nickname}
        </div>
      </div>
    </>
  );
}

// const StCard = styled.div`
//   padding: 12px;
//   height: 90px;
//   border: 1px solid #ddd;
//   background-color: #fff;
//   border-radius: 12px;
//   width: 100%;
//   margin-bottom: 12px;
// `;

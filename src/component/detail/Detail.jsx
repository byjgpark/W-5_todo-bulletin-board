import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./style.css"
import Comment from "../comment/Comment";
import { useEffect, useState } from "react";
import {
  __getTodosThunk,
  __updateTodoThunk,
} from "../../redux/modules/todosSlice";

export default function Detail() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  let [todo] = useState();
  let [editBody, setEditBody] = useState("");
  const [edit, setEdit] = useState(false);
  const { todos } = useSelector((state) => state.todos);
  const { id } = useParams();

  todo = todos.find((x) => x.id === Number(id));

  useEffect(() => {
    dispatch(__getTodosThunk());
  }, [dispatch]);

  useEffect(() => {
    setEditBody(todo?.content);
  }, [todo]);

  const onEditHandler = () => {
    setEdit(true);
  };

  const onSubmitHandler = () => {
    dispatch(
      __updateTodoThunk({
        ...todo,
        content: editBody,
      })
    );
    setEditBody(editBody);
    setEdit(false);
  };

  const onChangeHandler = (event) => {
    setEditBody(event.target.value);
  };

  return (
    <>
    <div className="detail-group">
      <div className="detail-title">
          <div>id : {todo?.id}</div>
          {!edit && <button className="detail-previBtn" onClick={() => navigate(-1)}>이전으로</button>}
      </div>    
        <div className="detail-title">{todo?.title}</div>
        <div className="detail-subGroup">
        {edit ? (
          <>
            <textarea className="detail-txtArea" value={editBody} onChange={onChangeHandler}></textarea>
          </>
        ) : (
          <main style={{ marginLeft: "30px" }}>{todo?.content}</main>
        )}

        <div style={{ float: "right" }}>
          {edit ? (
            <button className="detail-editBtn"><BtnBox style={{ marginRight: "30px" }} onClick={onSubmitHandler}>
              저장하기
            </BtnBox>
            </button>
          ) : (
            <BtnBox style={{ marginRight: "30px" }} onClick={onEditHandler}>
              수정하기
            </BtnBox>
          )}
        </div>
        </div>
      <Comment></Comment>
      </div>
    </>
  );
}


const DetailIdTi = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 32px;
`
const DetailTodoTi = styled.div`
  font-size: 32px;
  font-weight: 700;
`
const DetailSubCon = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 50px;
  min-height: 100px;
`

// const Box2 = styled.div`
//   width: 500px;
//   height: 300px;
//   border: 1px solid rgb(238, 238, 238);
// `;
// const Box3 = styled.div`
//   display: flex;
//   height: 80px;
//   justify-content: space-between;
//   padding: 0px 24px;
//   align-items: center;
// `;

const BtnBox = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 120px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  cursor: pointer;
`;

const Textarea = styled.textarea`
  width: 70%;
  border: 1px solid #eee;
  padding: 12px;
  font-size: 14px;
`;

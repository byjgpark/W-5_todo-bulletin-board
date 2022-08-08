import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "../../redux/modules/todoSlice";
import { __getCommentsThunk } from "../../redux/modules/commentsSlice";
import "./comment.css";

function Comment() {
  // Hook
  const [isShow, setisShow] = useState(false);

  // Redux
  // const todos = useSelector((state) => state.todos);
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  // console.log("hello todos " + JSON.stringify(todos.todos))
  // console.log("hello comments " + JSON.stringify(comments.comments))

  useEffect(() => {
    // dispatch(__getTodos());
    dispatch(__getCommentsThunk());
  }, [dispatch]);

  return (
    <div className="isKcvs">
      <div className="SVavv">
        <div className="fBRIGy">눌러서 댓글내리기</div>
      </div>
      <form className="hPRjqN">
        <div className="cSGhKx">
          <input
            type="text"
            placeholder="이름 (5자 이내)"
            className="iskVDh"
            required
          />
        </div>
        <input
          type="text"
          placeholder="댓글을 추가하세요. (100자 이내)"
          className="iskVDh"
          required
        />
        <button type="submit">추가하기</button>
      </form>
      <div className="kJEvVR">
        {comments.comments.isLoading === false &&
          comments.comments.data.map((comment) => {
            if (comment.comment !== undefined) {
              return (
                <div className="jOlBJN">
                  <div className="cPgLdn">
                    <div>{comment.comment.username}</div>
                    <div className="fBRIGy">{comment.comment.body}</div>
                  </div>

                  <div className="jPiwpb">
                    <button className="bPVoHM">수정하기</button>
                    <button className="bPVoHM">삭제하기</button>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}

export default Comment;

// const [isUp, setIsUp] = useState(false);
// return (
//   <StDrawer isUp={isUp}>
//     <StHeader>
//       <div
//         onClick={() => {
//           setIsUp((pre) => !pre);
//         }}
//       >
//         {isUp ? <MdFileDownload size="24" /> : <MdFileUpload size="24" />}
//       </div>
//     </StHeader>
//     {/* {children} */}
//   </StDrawer>
// );
//       }

// export default Comment;

// const StDrawer = styled.div`
// border: 1px solid red;
// width: 100%;
// min-height: 80%;
// height: 80%;
// background-color: #eee;
// position: absolute;
// bottom: 0;
// border-radius: 24px 24px 0 0;
// transform: ${({ isUp }) => `translateY(${isUp ? 0 : 600}px)`};
// transition: transform 300ms ease-in-out;
// `;

// const StHeader = styled.div`
// display: flex;
// justify-content: center;
// padding: 17px;
// `;

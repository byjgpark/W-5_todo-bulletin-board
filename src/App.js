import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  console.log("checking " + process.env.REACT_APP_API_KEY)

  return (
    <div className="main-group">
      <div className="main-title">
        <span>B반 대나무숲🎋</span>
      </div>
      <div className="inform">
        <span>아래에서 원하는 메뉴를 선택해주세요.</span>
      </div>
      <div className="buttons">
        <div>
          <button
            className="button-post"
            onClick={() => {
              navigate("/form");
            }}
          >
            <div className="wrap">
              <div className="inside-1">게시글 등록하기📌</div>
              <div className="inside-2">
                익명으로 누구나 글을 쓸 수 있어요.<br></br>여러분의 생각이
                궁금해요!
              </div>
            </div>
          </button>
        </div>
        <div>
          <button
            className="button-list"
            onClick={() => {
              navigate("/todolist");
            }}
          >
            <div className="wrap">
              <div className="inside-1">게시글 목록 보기🔍</div>
              <div className="inside-2">
                다른 사람들이 쓴 글도 볼 수 있어요.<br></br>지금 바로 구경하러
                가볼까요?
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;

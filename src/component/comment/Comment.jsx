import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./comment.css";

function Comment() {
  const [isShow, setisShow] = useState(false);

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
        <button type="submit"></button>
      </form>
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

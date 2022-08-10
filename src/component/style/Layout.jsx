import React from "react";
import styled from "styled-components";

const Layout = ({ children, bgColor = "#fff" }) => {
  return (
    <>
      <StLayout bgColor={bgColor}>{children}</StLayout>
    </>
  );
};

export default Layout;

const StLayout = styled.div`
  height: calc(100vh - 45px);
  background-color: ${({ bgColor }) => {
    return bgColor;
  }};
  padding: 24px;
`;

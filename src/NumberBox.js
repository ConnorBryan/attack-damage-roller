import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";

export default function NumberBox({ top, left, value }) {
  return (
    <StyledNumberBox top={top} left={left}>
      {value}
    </StyledNumberBox>
  );
}

// #region Styles
const StyledNumberBox = styled.div`
  ${({ top, left }) => css`
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 375px;
    font-size: 160px;
  `}
`;
// #endregion

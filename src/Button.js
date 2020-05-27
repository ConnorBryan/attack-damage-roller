import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";

export default function Button({ top, left, ...rest }) {
  return <StyledButton top={top} left={left} {...rest} />;
}

// #region Styles
const StyledButton = styled.button`
  ${({ top, left }) => css`
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    width: 213px;
    height: 55px;
    font-size: 50px;
    background: none;
    border: none;
    outline: none;
  `}
`;
// #endregion

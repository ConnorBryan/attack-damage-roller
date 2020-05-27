import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";

export default function Nameplate({ top, left, ...rest }) {
  return <StyledNameplate top={top} left={left} {...rest} />;
}

// #region Styles
const StyledNameplate = styled.div`
  ${({ top, left }) => css`
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    width: 255px;
    height: 50px;
    font-size: 50px;
  `}
`;
// #endregion

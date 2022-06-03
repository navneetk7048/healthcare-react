import styled, { css } from "styled-components";

import variables from "../styles/abstracts/_variables.scss";

const Button = styled.button`
  border-radius: 0.3125rem;
  cursor: pointer;
  font-family: ${variables.fontOswald};
  font-size: 1em;
  display: inline-block;
  letter-spacing: 0.1rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  width: max-content;
  background-color: ${variables.clrWhite};
  color: ${variables.clrPoliceBlue};
  transition: all 0.6s cubic-bezier(0.05, 0.06, 0.05, 0.95);
`;

// Types of ButtonSlide available
// 1. white-blue
// 2. blue-orange
export const ButtonSlide = styled(Button)`
  ${({ type }) => {
    switch (type) {
      case "white-tiffanyBlue":
        return css`
          background: linear-gradient(
            90deg,
            ${variables.clrTiffanyBlue} 50%,
            ${variables.clrWhite} 50%
          );
          background-size: 200% 100%;
          color: ${variables.clrTartOrange};
          background-position: right bottom;

          &:hover {
            color: ${variables.clrWhite};
            background-position: left bottom;
          }
        `;
      case "tiffanyBlue-tartOrange":
        return css`
          background: linear-gradient(
            90deg,
            ${variables.clrTartOrange} 50%,
            ${variables.clrTiffanyBlue} 50%
          );
          background-size: 200% 100%;
          color: ${variables.clrWhite};
          background-position: right bottom;

          &:hover {
            background-position: left bottom;
          }
        `;
      default:
        break;
    }
  }}
`;

export default Button;

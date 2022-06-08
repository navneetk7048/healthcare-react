import styled, { css } from "styled-components";

import variables from "../styles/abstracts/_variables.scss";

const Button = styled.button`
  border: none;
  border-radius: 0.3125rem;
  cursor: pointer;
  font-family: ${variables.fontOswald};
  font-size: 1em;
  display: inline-block;
  letter-spacing: 0.1rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  max-width: max-content;
  background-color: ${variables.clrWhite};
  color: ${variables.clrPoliceBlue};
  transition: all 0.6s cubic-bezier(0.05, 0.06, 0.05, 0.95);
  text-align: center;
`;

// Types of ButtonSlide available
// 1. white-tiffanyBlue
// 2. tiffanyBlue-tartOrange
// 3. tartOrange-policeBlue
// 4. policeBlue-tiffanyBlue
// 5. pastelBlue-tiffanyBlue
// 6. white-tartOrange
export const ButtonSlide = styled(Button)`
  ${({ variant }) => {
    switch (variant) {
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
      case "tartOrange-policeBlue":
        return css`
          background: linear-gradient(
            90deg,
            ${variables.clrPoliceBlue} 50%,
            ${variables.clrTartOrange} 50%
          );
          background-size: 200% 100%;
          color: ${variables.clrWhite};
          background-position: right bottom;

          &:hover {
            background-position: left bottom;
          }
        `;
      case "policeBlue-tiffanyBlue":
        return css`
          background: linear-gradient(
            90deg,
            ${variables.clrTiffanyBlue} 50%,
            ${variables.clrPoliceBlue} 50%
          );
          background-size: 200% 100%;
          color: ${variables.clrWhite};
          background-position: right bottom;

          &:hover {
            background-position: left bottom;
          }
        `;
      case "pastelBlue-tiffanyBlue":
        return css`
          background: linear-gradient(
            90deg,
            ${variables.clrTiffanyBlue} 50%,
            ${variables.clrPastelBlue} 50%
          );
          background-size: 200% 100%;
          color: ${variables.clrWhite};
          background-position: right bottom;

          &:hover {
            background-position: left bottom;
          }
        `;
      case "white-tartOrange":
        return css`
          background: linear-gradient(
            90deg,
            ${variables.clrTartOrange} 50%,
            ${variables.clrWhite} 50%
          );
          background-size: 200% 100%;
          color: ${variables.clrTartOrange};
          background-position: right bottom;
          border: 1px solid ${variables.clrTartOrange};

          &:hover {
            background-position: left bottom;
            color: ${variables.clrWhite};
          }
        `;
      default:
        break;
    }
  }}
`;

// Available Special Buttons
// 1. simple-tiffanyBlue
export const ButtonSpecial = styled(Button)`
  ${({ variant }) => {
    switch (variant) {
      case "simple-tiffanyBlue":
        return css`
          box-shadow: 0 0 10s rgba(0, 0, 0, 0.7);
          text-transform: none;
          font-family: $font-open-sans;
          letter-spacing: normal;

          &.active,
          &:hover {
            background-color: ${variables.clrTiffanyBlue};
            color: ${variables.clrWhite};
          }
        `;
      default:
        break;
    }
  }}
`;

export default Button;

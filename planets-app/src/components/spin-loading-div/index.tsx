import styled from "styled-components";

export const SpinLoadingDiv = styled.div<{ $isBorderWhite?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  &:after {
    display: block;
    content: "";
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 4px solid
      var(
        ${(props) =>
          props.$isBorderWhite ? "--background" : "--blue-background"}
      );
    border-color: var(
        ${(props) =>
          props.$isBorderWhite ? "--background" : "--blue-background"}
      )
      transparent;
    animation: spin 1.25s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

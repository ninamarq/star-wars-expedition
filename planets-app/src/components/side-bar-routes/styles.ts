import styled from "styled-components";

const DynamicLink = styled.a<{ $isSelected?: boolean }>`
  width: 100%;
  padding: 16px;
  background: ${(props) =>
    props.$isSelected
      ? "var(--lighter-blue-background)"
      : "var(--blue-background)"};
  color: ${(props) => props.$isSelected && "var(--grey-color)"};
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    opacity: 0.85;
  }
`;

export const styles = { DynamicLink };

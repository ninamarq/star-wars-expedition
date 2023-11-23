import styled from "styled-components";

type TDynamicLinkProps = {
  isSelected?: boolean;
};

const SideBarContainer = styled.aside`
  height: 100%;
  width: 266px;
  background-color: var(--blue-background);
  color: var(--grey-color);
  display: flex;
  flex-direction: column;
  padding-top: 16px;
`;

const DynamicLink = styled.a<TDynamicLinkProps>`
  width: 100%;
  padding: 16px;
  background: ${(props) =>
    props.isSelected
      ? "var(--lighter-blue-background)"
      : "var(--blue-background)"};
  color: ${(props) => props.isSelected && "var(--grey-color)"};
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    opacity: 0.85;
  }
`;

export const styles = { SideBarContainer, DynamicLink };

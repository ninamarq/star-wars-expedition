import styled from "styled-components";

const ModalDelete = styled.div<{ $isBorderWhite?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  section {
    position: fixed;
    background: var(--background);
    padding: 16px;
    border-radius: 5px;
    width: 400px;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-shadow: 0px 4px 4px 0px #00000040;
  }
`;

const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: var(--error-main-background);
  p {
    color: var(--color-grey-darker);
    font-size: 24px;
    &:hover {
      transition: 0.5s;
      opacity: 0.9;
      cursor: pointer;
    }
  }
`;

const ModalButtonsContainer = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: center;
  gap: 16px;

  p {
    text-decoration: underline;
    color: var(--error-main-background);
    text-underline-offset: 3px;
    &:hover {
      cursor: pointer;
      transition: 0.5s;
      opacity: 0.85;
    }
  }

  button {
    background: var(--error-main-background);
    color: var(--background);
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    &:hover {
      cursor: pointer;
      transition: 0.5s;
      opacity: 0.9;
    }
  }
`;

export const styles = { ModalDelete, ModalHeader, ModalButtonsContainer };

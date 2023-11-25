import styled from "styled-components";

const FavoriteCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: fit-content;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 2px 2px 3px 0px #0000001a;
  header {
    display: flex;
    justify-content: space-between;
  }
  p {
    color: var(--color-grey-darker);
  }
  #remove-favorite {
    cursor: pointer;
    &:hover {
      color: var(--color-default);
      transition: 0.5s;
    }
  }
`;

export const styles = { FavoriteCard };

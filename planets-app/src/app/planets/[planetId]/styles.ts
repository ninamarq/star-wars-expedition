import styled from "styled-components";

const PlanetCard = styled.div`
  background-color: var(--background);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  justify-content: center;
  padding: 16px;
  width: 100%;
  height: fit-content;
  flex-wrap: nowrap;
  color: black;
`;

export const styles = { PlanetCard };

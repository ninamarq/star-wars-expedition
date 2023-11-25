import styled from "styled-components";

const PlanetsTable = styled.table`
  text-align: left;
  width: 100%;
  padding: 8px;
  border-collapse: collapse;
  border-spacing: 0;
  padding: 16px;
  cursor: default;
  th {
    color: var(--color-grey);
  }
  td,
  th {
    padding: 16px;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: var(--color-grey-darker);
    &:last-child {
      text-align: center;
    }
  }
  tbody tr {
    cursor: pointer;
    &:hover {
      background-color: var(--grey-color);
    }
  }
`;

export const styles = { PlanetsTable };

import styled from "styled-components";

export const Table = styled.div``;

export const RowGroup = styled.div``;

export const Row = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr) 140px;
  padding: 0 24px;
`;

export const Cell = styled.span`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Body = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 10px;
`;

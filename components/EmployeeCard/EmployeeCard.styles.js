import styled from "styled-components";

import { colors } from "../../config/theme";

export const Row = styled.div`
  align-items: center;
  background-color: ${colors.white};
  border-radius: 10px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr) auto;
  padding: 32px 24px;
`;

export const Cell = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Name = styled.p`
  color: ${colors.darkGrey};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
`;

export const BirthDate = styled.time`
  font-size: 14px;
`;

export const SalaryAmount = styled.span`
  font-weight: 500;
`;

export const SalaryInterval = styled.span`
  color: ${colors.lightGrey};
  font-size: 13px;
`;

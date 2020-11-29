import styled from "styled-components";

import { colors } from "../../../constants/theme";

export const Wrapper = styled.button`
  align-items: center;
  border-radius: 10px;
  display: inline-grid;
  gap: 13px;
  grid-template-columns: 36px 1fr;
  margin: -6px;
  padding: 6px;
  text-align: left;
  vertical-align: middle;
`;

export const Image = styled.img`
  background-color: ${colors.pippin};
  border-radius: 50%;
  height: 36px;
  width: 36px;
`;

export const Body = styled.div`
  line-height: 1.2;
`;

export const Name = styled.p`
  color: ${colors.darkGrey};
  font-weight: 500;
`;

export const Role = styled.p`
  color: ${colors.lightGrey};
  font-size: 13px;
  margin-top: 2px;
`;

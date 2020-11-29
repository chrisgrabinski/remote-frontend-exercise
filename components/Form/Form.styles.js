import styled from "styled-components";

import { colors } from "../../config/theme";

export const FormWrapper = styled.form`
  background-color: ${colors.white};
  border-radius: 10px;
  box-shadow: 6px 6px 54px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const FormRow = styled.div`
  padding: 32px;
`;

export const Header = styled(FormRow)`
  border-bottom: 1px solid #eaedf3;
`;

export const Title = styled.h1`
  color: ${colors.darkGrey};
  font-size: 22px;
  font-weight: 500;
  line-height: 1.2;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 6px;
`;

export const Body = styled(FormRow)`
  padding-bottom: 80px;
`;

export const BodyInner = styled.div`
  display: grid;
  gap: 32px;
  margin: 0 auto;
  max-width: 600px;
`;

export const Footer = styled(FormRow)`
  background-color: #f9faff;
  display: flex;
  justify-content: center;
`;

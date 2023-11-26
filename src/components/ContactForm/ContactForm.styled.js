import styled from 'styled-components';
import { Form } from 'formik';

export const MyForm = styled(Form)`
  margin: 24px;
  display: flex;
  gap: 24px;
  justify-content: center;
`;
export const BoxInForm = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
`;
export const Label = styled.label`
  position: absolute;
  top: -16px;
  left: 2px;
  color: orange;
`;
export const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  border-radius: 1px;
  outline: none;
`;
export const Button = styled.button`

`

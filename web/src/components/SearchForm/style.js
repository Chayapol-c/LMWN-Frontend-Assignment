import styled from "styled-components";

export const Title = styled.h1`
  font-size: 5rem;
  color: hsl(196, 100%, 50%);
  margin: 2rem 0;
  text-align: center;
  font-weight: 400;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`;
export const FormContainer = styled.form`
  margin: 0 0 2.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputForm = styled.input`
  border: none;
  border-bottom: 1px solid hsl(0, 0%, 55%);
  text-align: center;
  margin: 0 0 1rem 0;
  outline: none;
  width: 35rem;
  padding: 0 0 0.5rem 0;
  font-family: inherit;
  font-size: 1.1rem;
  color: hsl(0, 0%, 35%);
  &::placeholder {
    color: hsl(0, 0%, 75%);
  }
  &:focus {
    border-bottom: 1px solid hsl(196, 100%, 50%);
  }
`;

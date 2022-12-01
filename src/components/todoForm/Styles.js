import styled from "styled-components";

export const Trello = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 20px;
`;

export const Form = styled.form `
display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    row-gap: 10px;
`

export const Input = styled.input`
border: 1px solid #dfe1e6;
background-color:#fafbfc;
padding: 7px
`;

export const Button = styled.button`
  padding: 7px;
  border: none;
  border-radius: 5px;
  background-color: #8594ff;
  color: #fff;
  font-weight: 700;
  font-size: initial;
  cursor: pointer;

  &:hover {
    background-color: #3e4899;
  }
`;
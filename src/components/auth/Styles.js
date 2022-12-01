import styled from "styled-components";

const DivInput = styled.div`
  display: grid;
  margin: 0 20px;
`;

const Input = styled.input`
  border: 1px solid #dfe1e6;
  background-color: #fafbfc;
  margin-bottom: 20px;
  padding: 7px;
`;

const Button = styled.button`
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

export { DivInput, Input, Button };

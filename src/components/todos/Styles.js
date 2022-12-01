import styled from "styled-components";

export const Ul = styled.ul`
  padding: 0;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr  ;
`;

export const Li = styled.li`
  list-style: none;
  text-align: center;
  align-self: flex-start;
  padding: 20px;
  background-color: #89bdff;
  border: 1px solid #2975df;
  border-radius: 10px;
  box-shadow: 1px 1px 30px 17px rgb(0 144 255 / 20%);
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Delete = styled.button`
  width: 70px;
  height: 25px;
  border-radius: 10px;
  border: 2px solid;
  background-color: #89bdff;
  color: red;
  font-size: inherit;
  cursor: pointer;
`;

export const Input = styled.input`
  border: 1px solid #dfe1e6;
  border-radius: 7px;
  background-color: #fafbfc;
  margin-bottom: 20px;
  padding: 5px;
`;

export const Button = styled.button`
  font-size: inherit;
  border-radius: 10px;
  border: 1px solid;
  margin-left: 10px;
  background-color: #89bdff;
  color: #000;
  cursor: pointer;
`;

export const Todo = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

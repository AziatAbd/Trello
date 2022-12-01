import styled from "styled-components";

const Div = styled.div`
  text-align: center;
`;

const Card = styled.div`
  margin: 0 auto;
  border: 1px solid white;
  width: 300px;
  height: 400px;
  box-shadow: 1px 1px 22px 4px rgba(34, 60, 80, 0.2);
  color: #5e6c84;
  background-color: #fff;
`;

const Img = styled.img`
  width: 50px;
  margin: 0 20px 0 0;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
`;
const LogOut = styled.button`
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
  cursor: pointer
`;

export { Div, Card, Img, Logo, LogOut };

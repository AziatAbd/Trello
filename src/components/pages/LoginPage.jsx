import { Login } from "../auth/Login";
import { Link } from "react-router-dom";
import { Card, Div, Img, Logo } from "./styles";

const LoginPage = () => {
  return (
    <Div>
         <Logo>
        <Img
          src="https://www.freedownloadlogo.com/logos/t/trello.svg"
          alt="Trello"
        />
        <h1>Trello</h1>
      </Logo>
      <Card>
        <h1>Login</h1>
        <Login />
        <p>
          Or <Link to="/register">register</Link>
        </p>
      </Card>
    </Div>
  );
};

export default LoginPage;

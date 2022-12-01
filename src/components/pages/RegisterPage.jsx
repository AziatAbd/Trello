import { SignUp } from "../auth/SignUp";
import { Link } from "react-router-dom";
import { Card, Div, Img, Logo } from "./styles";

const RegisterPage = () => {
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
        <h1>Register</h1>
        <SignUp />
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </Card>
    </Div>
  );
};

export default RegisterPage;

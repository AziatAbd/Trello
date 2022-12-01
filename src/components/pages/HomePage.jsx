import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { removeUser } from "../../store/slices/userSlice";
import { TrelloForm } from "../todoForm/GlobalTodoForm";
import { LogOut } from "./styles";

const HomePage = () => {
  const dispatch = useDispatch();

  const { isAuth, email } = useAuth();

  // return (
  //   <TrelloForm />
  // )
  
  return isAuth ? (
    <div>
      <LogOut onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </LogOut>
      <TrelloForm />
    </div>
  ) : <Navigate to='/login' />;
};

export default HomePage;

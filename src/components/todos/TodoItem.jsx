import { useDispatch } from "react-redux";
import { trelloActions } from "../../store/slices/todoSlice";
import { Delete, Item } from "./Styles";

export const TodoItem = (props) => {
  const dispatch = useDispatch();
  const deleteColumn = () => {
    dispatch(trelloActions.deleteColumnItem(props));
  };
  return (
    <Item>
      <p>{props.cardItem}</p>

      <div>
        <Delete onClick={deleteColumn}>Delete</Delete>
      </div>
    </Item>
  );
};

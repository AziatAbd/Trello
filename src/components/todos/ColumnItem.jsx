import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { trelloActions } from "../../store/slices/todoSlice";
import { Button, Delete, Li } from "./Styles";
import { TodoList } from "./TodoList";
import { Card } from "./Styles";
import { Input } from "./Styles";

export const CardItem = (props) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const cardItem = {
    completed: false,
    mainId: props.id,
    id: v4(),
    cardItem: value,
  };
  const addColumnItem = (e) => {
    e.preventDefault();
    if (value.trim().length !== 0) {
      dispatch(trelloActions.addColumnItem(cardItem));
      setValue("");
    }
  };
  const deleteTodo = () => {
    dispatch(trelloActions.deleteTodo(props.id));
  };
  return (
    <Li>
      <Card>
        <h2>{props.card}</h2>
        <Delete onClick={deleteTodo}>Delete</Delete>
      </Card>
      <form onSubmit={addColumnItem}>
        <Input
          placeholder={"Add task"}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          type="text"
        />
        <Button variant={"contained"} type="submit">
          Add task
        </Button>
      </form>
      <TodoList {...props} />
    </Li>
  );
};

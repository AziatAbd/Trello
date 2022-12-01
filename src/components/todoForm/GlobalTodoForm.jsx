import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { trelloActions } from "../../store/slices/todoSlice";
import { CardList } from "../todos/ColumnList";
import { Button, Form, Input, Trello } from "./Styles";

export const TrelloForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const card = {
    id: v4(),
    card: value,
    cardItem: [],
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (value.trim().length !== 0) {
      dispatch(trelloActions.addTodo(card));
      setValue("");
    }
  };
  return (
    <Trello>
      <Form onSubmit={onSubmitHandler}>
        <Input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={"Add Card"}
        />
        <Button type="submit" variant={"contained"}>
          Add card
        </Button>
      </Form>
      <CardList />
    </Trello>
  );
};

import { Todo } from "./Styles";
import { TodoItem } from "./TodoItem";
export const TodoList = (props) => {
  return (
    <Todo>
      {props.cardItem.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </Todo>
  );
};

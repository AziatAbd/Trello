import { useSelector } from "react-redux";
import { CardItem } from "./ColumnItem";
import { Ul } from "./Styles";
export const CardList = () => {
  const state = useSelector((state) => state.todo.cards);
  return (
    <Ul>
      {state.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
    </Ul>
  );
};

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};
const todoSlice = createSlice({
  name: "trello",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.cards.push(action.payload);
    },
    addColumnItem(state, action) {
      const newItem = state.cards.find(
        (item) => item.id === action.payload.mainId
      );
      newItem.cardItem.push(action.payload);
    },
    deleteTodo(state, action) {
      state.cards = state.cards.filter((item) => item.id !== action.payload);
    },
    deleteColumnItem(state, action) {
      const deletedItem = state.cards.find(
        (item) => item.id === action.payload.mainId
      );
      deletedItem.cardItem = deletedItem.cardItem.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});
export const trelloActions = todoSlice.actions;
export default todoSlice;

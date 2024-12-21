import { styled } from "@mui/material";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todo, handleDeleteItem }) => {
  return (
    <StyledList>
      {todo.map((item) => (
        <TodoItem
          key={item.id}
          title={item.title}
          id={item.id}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </StyledList>
  );
};
const StyledList = styled("ul")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

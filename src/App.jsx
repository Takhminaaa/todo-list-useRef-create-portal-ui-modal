import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { styled } from "@mui/material";

function App() {
  const [todo, setTodo] = useState([]);
  const handleChange = (newTodo) => {
    console.log("newTodo: ", newTodo);
    setTodo([...todo, newTodo]);
  };
  const handleDeleteItem = (todoId) => {
    setTodo(todo.filter((item) => item.id !== todoId));
  };

  return (
    <StyledContainer>
      <h1>ToDo List</h1>
      <TodoForm handleChange={handleChange} />
      <TodoList todo={todo} handleDeleteItem={handleDeleteItem} />
    </StyledContainer>
  );
}

export default App;
const StyledContainer = styled("div")(() => ({
  width: "800px",
  height: "fit-content",
  margin: "0 auto",
  backgroundColor: "white",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px",
  padding: "30px",
  "& h1": {
    fontFamily: "Courier, monospace",
  },
}));

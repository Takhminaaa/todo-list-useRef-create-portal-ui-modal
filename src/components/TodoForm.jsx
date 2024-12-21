import { styled } from "@mui/material";
import { useRef } from "react";
import CreateIcon from "@mui/icons-material/Create";

export const TodoForm = ({ handleChange }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputValue = inputRef.current.value.trim();
    if (!inputValue) {
      return;
    }

    const newValue = {
      title: inputValue,
      id: Date.now().toString(),
    };

    handleChange(newValue);
    inputRef.current.value = "";
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter new todo" ref={inputRef} />
      <button type="submit">
        <CreateIcon />
      </button>
    </StyledForm>
  );
};

const StyledForm = styled("form")(() => ({
  display: "flex",
  gap: "20px",
  "& input": {
    width: "400px",
    height: "40px",
    padding: "8px",
  },
  "& button": {
    fontFamily: "Courier, monospace",
    border: "none",
    background: "white",
  },
}));

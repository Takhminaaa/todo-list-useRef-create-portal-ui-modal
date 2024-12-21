import { styled } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CancelIcon from "@mui/icons-material/Cancel";

export const DeleteModal = ({ handleDeleteItem, id, closeModal }) => {
  return (
    <StyledModal>
      <h2>Вы точно хотите удалить?</h2>
      <StyledContainerButton>
        <div>
          <span>yes</span>
          <TaskAltIcon
            onClick={() => handleDeleteItem(id)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <section>
          <span>no</span>
          <CancelIcon onClick={closeModal} style={{ cursor: "pointer" }} />
        </section>
      </StyledContainerButton>
    </StyledModal>
  );
};
const StyledModal = styled("div")(() => ({
  width: "470px",
  height: "90px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "center",
}));
const StyledContainerButton = styled("section")(() => ({
  display: "flex",
  gap: "40px",

  "& div": {
    display: "flex",
    gap: "4px",
    "& span": {
      color: "green",
      fontSize: "18px",
    },
  },
  "& section": {
    display: "flex",
    gap: "4px",
    "& span": {
      color: "red",
      fontSize: "18px",
    },
  },
}));

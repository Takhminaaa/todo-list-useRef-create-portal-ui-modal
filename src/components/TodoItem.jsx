import { useState } from "react";
import { ModalUi } from "./UI/ModalUi";
import { DeleteModal } from "./DeleteModal";
import { styled } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export const TodoItem = ({ title, id, handleDeleteItem }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <StyledContainer>
        <p>{title}</p>
        <DeleteIcon onClick={openModal} />
      </StyledContainer>
      {showModal && (
        <ModalUi closeModal={closeModal}>
          <DeleteModal
            handleDeleteItem={handleDeleteItem}
            id={id}
            closeModal={closeModal}
          />
        </ModalUi>
      )}
    </>
  );
};
const StyledContainer = styled("div")(() => ({
  display: "flex",
  width: "490px",
  justifyContent: "space-between",
  padding: "12px",
  background: "#5d5b5b28",
  borderRadius: "8px",
  "& p": {
    fontFamily: "Courier, monospace",
    fontSize: "18px",
  },
}));

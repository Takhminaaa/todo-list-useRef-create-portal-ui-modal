import { styled } from "@mui/material";
import { createPortal } from "react-dom";

export const ModalUi = ({ closeModal, children }) => {
  return createPortal(
    <StyledModalContainer onClick={closeModal}>
      <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
    </StyledModalContainer>,

    document.getElementById("modal")
  );
};
const StyledModalContainer = styled("div")(() => ({
  width: "100%",
  height: "100vh",
  background: "#66666699",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  position: "fixed",
  top: "0",
  left: "0",
}));
const Content = styled("div")(() => ({
  padding: "30px",
  backgroundColor: "white",
}));

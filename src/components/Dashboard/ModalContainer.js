import React from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import EditEmployee from "./Edit-employee";

const ModalContainer = ({ closeModal, buttonText, initialValue }) => {
  const close = () => {
    closeModal();
  };

  return ReactDOM.createPortal(
		<div className="edit-overlay" onClick={close}>
			<Container className="edit-modal" onClick={(e) => e.stopPropagation()}>
				<EditEmployee
					buttonText={buttonText}
					close={close}
					initialValue={initialValue}
				/>
			</Container>
		</div>,
		document.querySelector("#modal")
	);
};
export default ModalContainer;

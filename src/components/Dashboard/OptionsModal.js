import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import { Button, Form } from "react-bootstrap";
import LoaderButton from "../LoaderButton";
import { DeleteEmployeeAction } from "./view-employee/EmployeeAction";
import SuccessRequestModal from "./SuccessRequestModal";
import NetWorkErrors from "../NetWorkErrors";
import useToken from "../../hooks/useToken";
import useBusinessToken from "../../hooks/useBusinessToken";

// DELETE EMPLOYE FUNCTIONALITY
const DeleteConfirmationModal = ({
	closeModal,
	deleteAction,
	data,
	removeLoader,
	request,
	remove,
}) => {
	const { token } = useToken();
	const { bizToken } = useBusinessToken();

	const DeleteModal = () => {
		closeModal();
		removeLoader(false);
	};
	useEffect(() => {
		if (!remove) {
			return null;
		} else {
			// closeModal();
			removeLoader(false);
		}
	}, [remove, removeLoader, closeModal]);

	const OnConfirmation = (e) => {
		e.preventDefault();
		removeLoader(true);

		// console.log({ businessToken: bizToken, userToken: token, ...data });
		deleteAction({ businessToken: bizToken, userToken: token, ...data });
	};

	return ReactDOM.createPortal(
		<div className="Overlay">
			{/* <div className='Modal col-6' onClick={(e) => e.stopPropagation()}> */}
			<div className="modal-dialog d-flex  ">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="staticBackdropLabel">
							Remove employee
						</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
							onClick={DeleteModal}></button>
					</div>
					<div className="modal-body">
						Are you sure you want to remove {data.employee_firstname} {}
						{data.employee_lastname}?
					</div>
					<form
						className="d-flex justify-content-center align-items-center "
						style={{ height: "4rem" }}
						onSubmit={OnConfirmation}>
						<LoaderButton
							btnName="Remove"
							btnStyle="me-2 bg-danger"
							request={request}
						/>
						<Button
							type="button"
							className="button text-white"
							onClick={DeleteModal}>
							Cancel
						</Button>
					</form>
				</div>
			</div>
		</div>,
		document.querySelector("#modal")
	);
};

const DeleteEmployee = ({ data, DeleteEmployeeAction, removeEmployeeRes }) => {
	const [deleteConfirmation, setDeleteConfirmation] = useState(false);
	const [request, setRequest] = useState(false);
	const [message, setMessage] = useState({});

	const onDelete = () => {
		// SHOW THE DELETE COMFORMATION MODAL
		setDeleteConfirmation(true);
	};

	return (
		<>
			<Button
				className="btn text-white bg-danger border-danger"
				onClick={onDelete}
				title="Remove">
				Remove
			</Button>
			{deleteConfirmation && (
				<DeleteConfirmationModal
					closeModal={(value) => setDeleteConfirmation(value)}
					data={data}
					request={request}
					deleteAction={DeleteEmployeeAction}
					removeLoader={(value) => setRequest(value)}
					remove={removeEmployeeRes}
				/>
			)}
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		removeEmployeeRes: state.DeleteEmployeeReducer,
	};
};

export default connect(mapStateToProps, {
  DeleteEmployeeAction,
})(DeleteEmployee);

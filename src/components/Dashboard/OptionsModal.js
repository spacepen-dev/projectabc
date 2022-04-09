import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import { Button, Form } from "react-bootstrap";
import LoaderButton from "../LoaderButton";
import { DeleteEmployeeAction } from "../../Actions";
import SuccessRequestModal from "./SuccessRequestModal";
import NetWorkErrors from "../NetWorkErrors";

// DELETE EMPLOYE FUNCTIONALITY
const DeleteConfirmationModal = ({
  closeModal,
  deleteAction,
  data,
  removeLoader,
  request,
}) => {
  const DeleteModal = () => {
    closeModal();
    removeLoader(false);
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeLoader(false);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  const OnConfirmation = (e) => {
    e.preventDefault();
    removeLoader(true);
    const companyToken = localStorage.getItem("token");

    deleteAction(companyToken, data);
  };

  return ReactDOM.createPortal(
    <div className='Overlay'>
      {/* <div className='Modal col-6' onClick={(e) => e.stopPropagation()}> */}
      <div className='modal-dialog d-flex  '>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='staticBackdropLabel'>
              Remove employee
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
              onClick={DeleteModal}></button>
          </div>
          <div className='modal-body'>
            Are you sure you want to remove {data.employee_firstname} {}
            {data.employee_lastname}?
          </div>
          <Form
            className='d-flex justify-content-center align-items-center '
            style={{ height: "4rem" }}
            onSubmit={OnConfirmation}>
            <LoaderButton
              btnName='Remove'
              btnStyle='me-2 bg-danger'
              request={request}
            />
            <Button
              type='button'
              className='button text-white'
              onClick={DeleteModal}>
              Cancel
            </Button>
          </Form>
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

  const serverMessage = useCallback(() => {
    if (!removeEmployeeRes) {
      return null;
    } else {
      const { success, error } = removeEmployeeRes.data;
      // deleteConfirmation(false);
      if (success) {
        setMessage((state) => {
          return { ...state, successMessage: success };
        });
        const successTimeOut = setTimeout(() => {
          setMessage((state) => {
            return { ...state, successMessage: "" };
          });
        }, 4000);

        return () => {
          clearTimeout(successTimeOut);
        };
      } else if (error) {
        setMessage((state) => {
          return { ...state, errorMessage: error };
        });

        const errorTimeOut = setTimeout(() => {
          setMessage({ ...message, errorMessage: "" });
        }, 4000);
        return () => {
          clearTimeout(errorTimeOut);
        };
      }
    }
  }, [removeEmployeeRes]);

  // FETCH REMOVE EMPLOYEE RESPONSE
  useEffect(() => {
    serverMessage();
  }, [serverMessage]);

  return (
    <>
      <Button
        className='btn text-white bg-danger border-danger'
        onClick={onDelete}
        title='Remove'>
        Remove
      </Button>
      {deleteConfirmation && (
        <DeleteConfirmationModal
          closeModal={(value) => setDeleteConfirmation(value)}
          data={data}
          request={request}
          deleteAction={DeleteEmployeeAction}
          removeLoader={(value) => setRequest(value)}
        />
      )}
      {message.successMessage && (
        <SuccessRequestModal message={message.successMessage} />
      )}
      {message.errorMessage && (
        <NetWorkErrors errMessage={message.errorMessage} />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    removeEmployeeRes: state.DashboardReducer.removeEmployee,
  };
};

export default connect(mapStateToProps, {
  DeleteEmployeeAction,
})(DeleteEmployee);

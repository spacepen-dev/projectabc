import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ViewEmployeeModal from "./ViewEmployeeModal";

// EDIT EMPLOYEE FUNCTIONALITY
const EditCompanyEmployee = ({ data }) => {
  const [showEditModal, setEditModal] = useState(false);

  const onEdit = () => {
    // SHOW THE EDIT MODAL
    setEditModal(true);
  };

  const closeModal = () => {
    setEditModal(false);
  };
  return (
    <React.Fragment>
      <Button
        title='Edit employee details'
        style={{ backgroundColor: "#23549e", borderColor: "#23549e" }}
        onClick={onEdit}>
        Edit
      </Button>
      {showEditModal && (
        <ViewEmployeeModal initialValue={data} closeModal={closeModal} />
      )}
    </React.Fragment>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     removeEmployeeRes: state.DashboardReducer.removeEmployee,
//   };
// };

export default EditCompanyEmployee;

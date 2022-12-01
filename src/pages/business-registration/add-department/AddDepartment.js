import React, { useState, useEffect } from "react";
import { Form, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import AddRoles from "./AddRoles";
import { FormContainer } from "../main/RegistrationFormComp";
import { ButtonLoader } from "../../registration/ui";
import useBusinessToken from "../../../hooks/useBusinessToken";
import useToken from "../../../hooks/useToken";
import { SubmitDepartment } from "./DepartmentAction";

const AddDepartment = ({ SubmitDepartment, businessDepartment }) => {
	const navigate = useNavigate();

	const [department, setDepartment] = useState({ department: [] });
	const [isLoading, setLoading] = useState(false);
	const { bizToken } = useBusinessToken();
	const { token } = useToken();

	const Validation = () => {
		if (department.length === 0) {
		} else {
			setLoading(true);
			SubmitDepartment({
				departments: department,
				businessToken: bizToken,
				userToken: token,
			});
		}
	};

	useEffect(() => {
		if (!businessDepartment) return null;
		const { success } = businessDepartment;
		setLoading(false);

		if (success) {
			navigate("/registration/business/overview", { replace: true });
		}
		return;
	}, [businessDepartment, navigate]);

	return (
		<FormContainer
			name="Add department"
			pageName="Department"
			desc="Add department available in your organization">
			<Container className="add-roles" style={{ maxWidth: "50rem" }}>
				<Form
					onSubmit={(e) => {
						e.preventDefault();
						Validation();
					}}
					class="d-flex flex-column justify-content-between align-items-start">
					<AddRoles data={(val) => setDepartment(val)} />
					<div className="button-container w-100 d-flex justify-content-end">
						<ButtonLoader
							type="submit"
							styles="text-white p-3 login-btn category_btn"
							name="SUBMIT"
							request={isLoading}
						/>
					</div>
				</Form>
			</Container>
		</FormContainer>
	);
};

const mapStateToProps = (state) => {
  return {
    businessDepartment:state.AddDepartment
  }
};

export default connect(mapStateToProps, { SubmitDepartment })(AddDepartment);

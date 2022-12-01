import { useEffect, useMemo } from "react";
import { CompanyDetails } from "../../../Actions";
import useToken from "../../../hooks/useToken";
import { Button, Label } from "../../registration/ui";
import { FormContainer } from "../main/RegistrationFormComp";
import { connect } from 'react-redux';
import useBusinessToken from "../../../hooks/useBusinessToken";
import useHandleResponseObject from "../../../hooks/useHandleResponseObject";
import { useNavigate } from "react-router-dom";
import { getUserEmail } from "../../../lib/sharedfuntions";

const BusinessOverview = ({ CompanyDetails, business }) => {
    const navigate = useNavigate();
    const { token } = useToken();
    const { bizToken } = useBusinessToken();
    const { data } = useHandleResponseObject(business);
    
    const values = useMemo(() => {
        return {
					businessToken: bizToken,
					userToken: token,
					emailAddress: getUserEmail(),
				};
      }, [bizToken, token]);

     useEffect(() => {  
         CompanyDetails(values);

     }, [CompanyDetails, values]);
    
    return (
			<FormContainer
				name="Finish"
				desc="Choose the business you want to transact now."
				pageName="Finish">
				<form class="px-3 mt-5 pp_form">
					<div class="form-group mb-4"></div>
					<div class="form-group mb-4">
						<Label name="Business Account Number" styles="mb-3" />
						<input
							type="text"
							readOnly
							className="form-control py-2 "
							value={data?.vAccount_number}
						/>
					</div>
					<div class="form-group mb-4">
						<Label name="Business Account Name" styles="mb-3" />

						<input
							type="text"
							readOnly
							className="form-control py-2 "
							value={data?.vAccount_name}
						/>
					</div>
					<div class="form-group mb-4">
						<Label name="Business Bank Name" styles="mb-3" />

						<input
							type="text"
							readOnly
							className="form-control py-2 "
							value={data?.vBank_name}
						/>
					</div>
					<div className="w-100 text-center">
						<p>
							This account is specifically for you and connected to Aimienpay.
							For security reasons, you can only fund this account from any bank
							account that has the account name {data?.vAccount_name}
						</p>
						<p>
							You can setup your business and add your employees. Click on
							FINISH to log in
						</p>
					</div>

					<div class="mb-3 mt-5 button_container d-flex justify-content-center">
						<Button
							name="FINISH"
							onClick={() => navigate("/")}
							type="button"
							styles="btn text-white py-3 px-3 category_btn"
						/>
					</div>
				</form>
			</FormContainer>
		);
};

const mapStateToProps = (state) => {
    const response = state.CompanyDetailsReducers;
    return {
        business: response,
    }
 }

export default connect(mapStateToProps, {CompanyDetails}) (BusinessOverview);
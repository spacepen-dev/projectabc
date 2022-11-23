import { useContext } from "react";
import { Button, Input, Label, Error} from "../../registration/ui";
import { RegistrationContext } from "../main/RegistrationForm";
import { FormContainer } from "../main/RegistrationFormComp";

export default function FirstProfilePage({handleChange,businessNameValue,tradingNameValue,registrationNumberValue, businessTouched, businessError, registrationTouched, registrationError, prevPage}) {

const { page, ChangePage } = useContext(RegistrationContext);

   

    const registeredBusiness = {
        id: 'registeredBusiness',
        styles: 'form-control py-2',
        name: 'businessName',
        type: 'text',
        placeholder: 'Input your business name here',
        handleChange: handleChange,
        value: businessNameValue,
        touched: businessTouched,
        error:businessError
    };


    const tradingName = {
        type: "text",
        styles: 'form-control py-2',
        placeholder: "Input your trading name here",
        id: "tradingName",
        name: 'tradingName',
        handleChange: handleChange,
        value:tradingNameValue
    };


    const registrationNumber = {
        type: "text",
        styles: 'form-control py-2',
        placeholder: "E.g RC.1234567",
        id: "registrationNumber",
        name: 'registrationNumber',
        handleChange: handleChange,
        value: registrationNumberValue,
        touched: registrationTouched,
        error: registrationError

    }
    

    if (page !== 3) {
        return null;
    }

    const disabled = (!registrationNumber.value) ? true : false

    return (
			<FormContainer
				name="Profile"
				pageName="Profile"
				desc="Choose the business you want to transact now">
				{/* <!-- Heading --> */}

				{/* <!-- Form --> */}
				<form class="px-3 mt-5 pp_form">
					<div class="form-group mb-4">
						<Label name="Registered Business Name" styles="mb-3" />
						<Input {...registeredBusiness} />
						<Error error={businessError} touched={businessTouched} />
					</div>
					<div class="form-group mb-4">
						<Label name="Trading Name (optional)" styles="mb-3" />
						<Input {...tradingName} />
					</div>
					<div class="form-group mb-4">
						<Label name="Registration Number" styles="mb-3" />
						<Input {...registrationNumber} />
					</div>
					<div class="mb-3 d-flex  justify-content-center">
						<Button
							name="BACK"
							onClick={prevPage}
							type="button"
							styles="btn bg-white text-black p-3 category_btn"
						/>
						<Button
							name="CONTINUE"
							onClick={ChangePage}
							type="button"
							disabled={disabled}
							styles="btn login-btn text-white p-3 category_btn"
						/>
					</div>
				</form>
			</FormContainer>
		);

}
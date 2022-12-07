import { Label } from "../../registration/ui";
import { FormContainer } from "../main/RegistrationFormComp";
import { useState } from "react";

import { Link } from "react-router-dom";
import UploadModal from "../../../components/Dashboard/Logo-upload";

// Register the plugins

export default function ImageUpload() {
	const [file, setFile] = useState();
	const [upload, setUpload] = useState(false);

	const onChange = (e) => {
		const file = e.target.files[0];
		const imageMimeType = /image\/(png|jpg|jpeg)/i;

		if (!file.type.match(imageMimeType)) {
			return;
		}
		setFile(file);
		setUpload(true);
	};

	const modalProps = {
		file: file,
		open: upload,
		closeModal: () => {
			setUpload(false);
			setFile(null);
		},
	};

	return (
		<FormContainer
			name="Logo upload"
			pageName="upload"
			desc="Upload company business logo">
			{/* <!-- Left Section --> */}

			{/* <!-- Form --> */}
			<form className="px-3 mt-5 pp_form">
				<div className="form-group">
					<Label name="Business Logo" styles="mb-3" />
					<label
						htmlFor="logo-upload"
						className="p-5 mb-4 d-flex w-100 flex-column align-items-center justify-content-center text-center drag_area">
						<div className="mb-2 drag_photo">
							<img src="img/dragphoto.svg" alt="" />
						</div>
						<small className="drag_text">
							Drag file here to <br /> upload or <span>choose file</span>{" "}
						</small>
						<input
							type="file"
							id="logo-upload"
							className="d-none"
							onChange={onChange}
						/>
					</label>
				</div>

				<div className="mb-5 d-flex button_container justify-content-center">
					<Link
						to="/registration/business/add-department"
						type="button"
						className="d-block btn text-white p-3 category_btn">
						NEXT
					</Link>
				</div>
			</form>
			{upload && file && <UploadModal {...modalProps} />}
		</FormContainer>
	);
}

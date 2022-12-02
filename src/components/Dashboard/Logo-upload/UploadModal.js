import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ButtonLoader } from "../../../pages/registration/ui";
import useToken from "../../../hooks/useToken";
import useBusinessToken from "../../../hooks/useBusinessToken";
import { UploadImage } from "./UploadAction";
import { connect } from "react-redux";

const UploadModal = ({ close, file, UploadImage, response }) => {
	const [previewImage, setPreviewImage] = useState();

	const [request, setRequest] = useState(false);
	const { token } = useToken();
	const { bizToken } = useBusinessToken();

	useEffect(() => {
		let reader,
			isCanceled = false;
		if (!file) {
			setPreviewImage("");
		} else {
			reader = new FileReader();
			reader.onload = (e) => {
				const { result } = e.target;
				if (result && !isCanceled) {
					setPreviewImage(result);
				}
			};
			reader.readAsDataURL(file);
		}

		return () => {
			isCanceled = true;
			if (reader && reader.readyState === 1) {
				reader.abort();
			}
		};
	}, [file]);

	useEffect(() => {
		if (!response) return null;

		setRequest(false);
		// close();
	}, [response]);

	return ReactDOM.createPortal(
		<div className="Overlay-alert" onClick={close}>
			<form
				className="Modal verify-modal d-flex flex-column align-items-center justify-content-between"
				onClick={(e) => e.stopPropagation()}
				onSubmit={(e) => {
					setRequest(true);
					e.preventDefault();
					UploadImage({
						userToken: token,
						businessToken: bizToken,
						image: previewImage,
					});
				}}>
				<div style={{ width: "30rem", height: "30rem" }}>
					<img src={previewImage} alt="" className="h-100 w-100" />
				</div>
				{/* <div className="w-100 mt-4 mx-auto d-flex justify-content-center align-items-center cursor-pointer"> */}
				<ButtonLoader
					type="submit"
					styles=" text-white p-3 mx-auto category_btn"
					name="UPLOAD"
					request={request}
				/>
				{/* </div> */}
			</form>
		</div>,
		document.querySelector("#verified")
	);
};
const mapStateToProps = (state) => {
	return {
		response: state.UploadImageReducer,
	};
};

export default connect(mapStateToProps, { UploadImage })(UploadModal);

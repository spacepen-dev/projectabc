import { Button , Label,  } from "../../registration/ui";
import { FormContainer } from "../main/RegistrationFormComp";
import useBusinessToken from "../../../hooks/useBusinessToken";
import useToken from "../../../hooks/useToken";
import { useEffect, useRef, useState } from "react";
import { FilePond,  registerPlugin,  } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { Link } from "react-router-dom";

// Register the plugins
registerPlugin(FilePondPluginImagePreview)

export default function ImageUpload() {
  const { bizToken } = useBusinessToken();
  const {token} = useToken()
  
  const [files, setFiles] = useState([]);
  const [uploaded, setUploaded] = useState([]);

  const ref = useRef();

  const serverConfig = {
    process: {
      url: `https://haypex.com.ng/dev/ABC/aimienpay_temp/uploadBusinessLogo.php/${bizToken}/${token}`
      // url: 'api.com'
    }
  };

  useEffect(()=> console.log(ref.current),[files])

  const handleUploaded = (error, file) => {
    if (!error) {

      setUploaded([file]);
      ref.current?.removeFile(file.id);
    }
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
					<div className="p-5  mb-4 d-flex w-100 flex-column align-items-center justify-content-center text-center drag_area">
						{/* <div className="mb-2 drag_photo">
                <img src="img/dragphoto.svg" alt=""/>
              </div>
              <small className="drag_text">Drag file here to <br/> upload or <span>choose file</span> </small> */}
						<FilePond
							ref={ref}
							files={files}
							instantUpload={false}
							onprocessfile={handleUploaded}
							acceptedFileTypes={["image/png", "image/jpeg"]}
							onupdatefiles={setFiles}
							allowMultiple={false}
							server={serverConfig}
							name="image" //sets the file input name, it's filepond by default
							//labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
						/>

						{/* <FilePond
          ref={ref}
          instantUpload={false}
          // acceptedFileTypes={["image/png", "image/jpeg"]}
          files={files}
          onupdatefiles={setFiles}
          onprocessfile={handleUploaded}
          allowMultiple
          allowRevert={false}
          server={serverConfig}
          name="Image"
          imagePreviewHeight="50"
          styleItemPanelAspectRatio="0.12"
          labelIdle="<p><b>Choose files</b> or drag them here.</p>"
          labelFileProcessingError={(error) => {
            return error.body === "" ? "Upload error" : error.body;
          }}
        /> */}
					</div>
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
		</FormContainer>
	);
}
import React, { useRef, useState } from 'react'

// Import React FilePond
import { FilePond,  registerPlugin,  } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

// Our app
export default function UploadImage({ businessToken, userToken }) {
  
  const [files, setFiles] = useState([]);
  const [uploaded, setUploaded] = useState([]);

  const ref = useRef();
  const serverConfig = {
    process: {
      url: "./server"
    }
  };

  const handleUploaded = (error, file) => {
    if (!error) {
      setUploaded([...uploaded, file]);
      ref.current?.removeFile(file.id);
    }
  };
  return (
    <div className="App">
      {console.log(uploaded)}
      <FilePond
        // oninit={(pond)=> a(pond)}
        ref={ref}
        files={files}
        instantUpload={true}
        onprocessfile={handleUploaded}
        acceptedFileTypes={["image/png", "image/jpeg"]}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={3}
        proc
        // server='/api'
        // server={`https://haypex.com.ng/dev/ABC/aimienpay_temp/uploadBusinessLogo.php/${businessToken}/${userToken}`}
        name="logo" /* sets the file input name, it's filepond by default */
        //labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
    </div>
  )
}
import React, { useState } from 'react'

// Import React FilePond
import { FilePond,  registerPlugin } from 'react-filepond'

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
export default function UploadImage() {
  const [files, setFiles] = useState([])
  return (
    <div className="App">
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={3}
        server={`https://haypex.com.ng/dev/ABC/aimienpay_temp/uploadBusinessLogo.php/`}
        name="logo" /* sets the file input name, it's filepond by default */
        //labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
          {/* {console.log(File)} */}
    </div>
  )
}
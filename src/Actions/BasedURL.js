import axios from "axios";

const BaseURL = axios.create({
	// baseURL: "https://haypex.com.ng/dev/ABC/webService/",
	//baseURL: "https://apws.spacepen.tech/",
	 baseURL: "https://staging.apws.spacepen.tech/",
});


export default BaseURL;

export const ImageBaseUrl =
	"https://haypex.com.ng/dev/ABC/aimienpay_live/uploadBusinessLogo.php";

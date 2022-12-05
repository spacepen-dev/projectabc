import axios from "axios";

const BaseURL = axios.create({
	// baseURL: "https://haypex.com.ng/dev/ABC/webService/",
	// baseURL: "https://staging.apws.spacepen.tech/",
	baseURL: "https://staging.apws.spacepen.tech/",
});

export default BaseURL;

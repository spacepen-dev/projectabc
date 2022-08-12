import axios from "axios";

const BaseURL = axios.create({
  // config: {
  //   Headers: "",
  // },
  baseURL: "https://haypex.com.ng/dev/ABC/webService/",
});

export default BaseURL;

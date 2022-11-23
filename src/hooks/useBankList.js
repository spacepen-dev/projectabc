import {  useState } from "react";
import { bankList } from "../pages/registration/banklist";

export default function useBankList() {
	const [bank] = useState(bankList);

	return [bank];
}

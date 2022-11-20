import {  useState } from "react";
import { getBankList } from "../lib/sharedfuntions";

export default function useBankList() {
    const bankList = getBankList();
    const [bank] = useState(bankList);
    
    return [bank];

}

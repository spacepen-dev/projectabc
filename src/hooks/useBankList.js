import { useEffect, useState } from "react";
import { getBankList } from "../lib/sharedfuntions";

export default function useBankList() {
    const [bank, setBank] = useState([]);
    
    useEffect(() => {
        const bankList = getBankList();
        if (!bankList) {
            return;
        }
        setBank(bankList);
    }, []);
    
    return [bank];

}

export function usePage() {
    return;
}

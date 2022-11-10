import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBankList, Token } from "../lib/sharedfuntions";

export function useToken() {
    const [token, setToken] = useState('');
    const savedToken = Token();
    
    const navigate = useNavigate();

    useEffect(() => {
        if (!savedToken) {
            // GO BACK TO HOME PAGE
            navigate('/', { replace: true })
        }
        setToken(savedToken);;
    }, [token,navigate])
    
    
    // RETURN THE VALUE TO THE SETTER
    return {token} 
}


export function useBankList() {
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

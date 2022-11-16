import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBusinessToken } from "../lib/sharedfuntions";

export default function useBusinessToken() {

    const [bizToken, setToken] = useState('');
    const savedToken = getBusinessToken();
    
    const navigate = useNavigate();

    useEffect(() => {
        if (!savedToken) {
            // GO BACK TO HOME PAGE
            navigate('/', { replace: true })
        }
        setToken(savedToken);
    }, [bizToken, savedToken, navigate]);
    
    
    // RETURN THE VALUE TO THE SETTER
    return { bizToken };
}

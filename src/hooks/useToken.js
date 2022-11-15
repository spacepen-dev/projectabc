import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Token } from "../lib/sharedfuntions";

export default function useToken() {
    const [token, setToken] = useState('');
    const savedToken = Token();
    
    const navigate = useNavigate();

    useEffect(() => {
        if (!savedToken) {
            // GO BACK TO HOME PAGE
            navigate('/', { replace: true })
        }
        setToken(savedToken);;
    }, [token,savedToken,navigate])
    
    
    // RETURN THE VALUE TO THE SETTER
    return {token} 
}

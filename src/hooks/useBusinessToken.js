import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBusinessToken } from "../lib/sharedfuntions";

export default function useBusinessToken() {

    const savedToken = getBusinessToken();
    const [bizToken] = useState(savedToken);
    
    const navigate = useNavigate();

    useEffect(() => {
        if (!savedToken) {
            // GO BACK TO HOME PAGE
            navigate('/', { replace: true })
        }
    }, [bizToken, savedToken, navigate]);
    
    
    // RETURN THE VALUE TO THE SETTER
    return { bizToken };
}

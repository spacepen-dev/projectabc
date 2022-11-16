import { useEffect, useState } from "react";

export default function useBadge(row){
    const [bg, setBadgeColor] = useState('');

    useEffect(() => {
            if (row === "pending") {
              setBadgeColor('warning')
            } else if (row === "decline") {
              setBadgeColor('danger')
        
            } else {
              setBadgeColor('success')
        
            }
        return { bg }
        
    }, [bg,row])
}
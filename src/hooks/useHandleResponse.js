import { useEffect, useState } from "react";


export default function useHandleResponse(state) {
    const [data, setData] = useState([]);

  useEffect(() => {
    if (!state) {
      return null;
    } else {
      const { Data } = state;
          setData(Data);
  
        }
      }, [state]);
      
    return [data];
}
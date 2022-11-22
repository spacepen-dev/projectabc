import { useEffect, useState } from "react";
import swal from "sweetalert";


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

export function useHandleResponseArray(state) {
    const [data, setData] = useState([]);

  useEffect(() => {
    if (!state) {
      return null;
    } else {
      const { Data,networkError } = state;
      if (networkError) {
        swal("Error!", networkError.message, 'error');
      }
      setData(Data);
  }
}, [state]);
      
    return [data];
}
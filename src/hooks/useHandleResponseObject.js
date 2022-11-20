import { useEffect, useState } from "react";

export default function useHandleResponseObject(state) {
    const [data, setData] = useState({});
    useEffect(() => {
        if (!state) return null;
        const { Data } = state;
        setData(Data);
    }, [state]);

    return { data };
};
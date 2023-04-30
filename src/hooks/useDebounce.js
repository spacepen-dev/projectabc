import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const debounceTimer = setTimeout(() => {
			setDebouncedValue(value);
		}, delay || 500);
		return () => clearTimeout(debounceTimer);
	}, [value, delay]);

	return { debouncedValue };
};

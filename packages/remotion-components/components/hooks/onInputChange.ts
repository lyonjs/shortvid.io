import {useCallback, useState} from 'react';

export const useInputChange = (defaultValue?: any) => {
	const [value, setValue] = useState(defaultValue);
	const onValueChange = useCallback(
		(event: any) => setValue(event.target.value),
		[]
	);

	return [value, onValueChange];
};

import {ChangeEvent, useCallback, useState} from 'react';

export const useSelectChange = <Type>(defaultValue: Type) => {
	const [value, setValue] = useState<Type>(defaultValue);

	const onValueChange = useCallback((event: ChangeEvent<{value: unknown}>) => {
		setValue(event.target.value as Type);
	}, []);

	return [value, onValueChange] as const;
};

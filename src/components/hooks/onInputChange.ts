import {FormEvent, useCallback, useState} from 'react';

export const useInputChange = (defaultValue?: string) => {
	const [value, setValue] = useState<string>(defaultValue || '');
	const onValueChange = useCallback(
		(event: FormEvent<HTMLInputElement>) => setValue(event.currentTarget.value),
		[]
	);

	return [value, onValueChange] as const;
};

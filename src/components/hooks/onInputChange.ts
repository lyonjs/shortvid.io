import {ChangeEvent, FormEvent, useCallback, useState} from 'react';

export const useInputChange = <Type>(defaultValue: Type) => {
	const [value, setValue] = useState<Type>(defaultValue);
	const onValueChange = useCallback(
		(event: FormEvent<HTMLInputElement>) =>
			setValue(event.currentTarget.value as unknown as Type),
		[]
	);

	return [value, onValueChange] as const;
};

export const useSelectChange = <Type>(defaultValue: Type) => {
	const [value, setValue] = useState<Type>(defaultValue);

	const onValueChange = useCallback((event: ChangeEvent<{value: unknown}>) => {
		setValue(event.target.value as Type);
	}, []);

	return [value, onValueChange] as const;
};

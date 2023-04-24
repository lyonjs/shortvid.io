import {ChangeEvent, FormEvent, useCallback, useState} from 'react';
import {useSearchParams} from 'next/navigation';

export const useInputChange = <T extends string | undefined>(
	defaultValue: T,
	query?: string
) => {
	const searchParams = useSearchParams();
	const initialValue = query
		? searchParams.get(query) ?? defaultValue
		: defaultValue;

	const [value, setValue] = useState<T>(initialValue as T);
	const onValueChange = useCallback(
		(event: FormEvent<HTMLInputElement>) =>
			setValue(event.currentTarget.value as unknown as T),
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

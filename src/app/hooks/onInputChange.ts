import {ChangeEvent, FormEvent, useCallback, useState} from 'react';
import {useSearchParams} from 'next/navigation';

export const useInputChange = <ValueType extends string | undefined>(
	defaultValue: ValueType,
	query?: string
) => {
	const searchParams = useSearchParams();
	const initialValue = query
		? searchParams.get(query) ?? defaultValue
		: defaultValue;

	const [value, setValue] = useState<ValueType>(initialValue as ValueType);
	const onValueChange = useCallback(
		(event: FormEvent<HTMLInputElement>) =>
			setValue(event.currentTarget.value as unknown as ValueType),
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

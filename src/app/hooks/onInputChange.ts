import {ChangeEvent, FormEvent, useCallback, useState} from 'react';
import {useSearchParams} from 'next/navigation';

const isStrDate = (strToCheck: string) => {
	return Boolean(strToCheck.match(/\d{4}-\d{2}-\d{2}(T|\s)\d{2}:\d{2}/gi));
};

export const useInputChange = <ValueType extends string | Date | undefined>(
	defaultValue: ValueType,
	query?: string
) => {
	const searchParams = useSearchParams();
	let initialValue = query
		? searchParams.get(query) ?? defaultValue
		: defaultValue;

	if (
		initialValue &&
		typeof initialValue === 'string' &&
		isStrDate(initialValue)
	) {
		initialValue = new Date(initialValue);
	}

	const [value, setValue] = useState<ValueType>(initialValue as ValueType);
	const onValueChange = useCallback(
		(event: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
			let newValue: string | Date = event.currentTarget.value;

			if (isStrDate(newValue) || defaultValue instanceof Date) {
				newValue = new Date(event.currentTarget.value);
				newValue.setSeconds(0, 0);
			}

			setValue(newValue as unknown as ValueType);
		},
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

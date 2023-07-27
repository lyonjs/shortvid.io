import {FormEvent, useCallback, useState} from 'react';
import {useSearchParams} from 'next/navigation';

export const useInputDateChange = <ValueType extends Date | undefined>(
	defaultValue: ValueType,
	query?: string,
) => {
	const searchParams = useSearchParams();
	const initialValue = query
		? searchParams.get(query) ?? defaultValue
		: defaultValue;

	const formatedInitialValue = initialValue && new Date(initialValue);

	const [value, setValue] = useState<ValueType>(
		formatedInitialValue as ValueType,
	);
	const onValueChange = useCallback(
		(event: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
			const newValue = new Date(event.currentTarget.value);
			newValue.setSeconds(0, 0);
			setValue(newValue as unknown as ValueType);
		},
		[],
	);

	return [value, onValueChange] as const;
};

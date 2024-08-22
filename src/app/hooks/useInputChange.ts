import {FormEvent, useCallback, useState} from 'react';
import {useSearchParams} from 'next/navigation';

export const useInputChange = <ValueType extends string | undefined>(
	defaultValue: ValueType,
	query?: string,
) => {
	const searchParams = useSearchParams();
	const initialValue = query
		? (searchParams.get(query) ?? defaultValue)
		: defaultValue;

	const [value, setValue] = useState<ValueType>(initialValue as ValueType);
	const onValueChange = useCallback(
		(event: FormEvent<HTMLInputElement | HTMLSelectElement>) =>
			setValue(event.currentTarget.value as unknown as ValueType),
		[],
	);

	return [value, onValueChange] as const;
};

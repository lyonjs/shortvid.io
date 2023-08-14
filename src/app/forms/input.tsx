import React, {FormEvent} from 'react';

import styles from '../../../styles/app/components/form/inputs.module.css';

export interface InputProps {
	value?: string;
	setValue: (event: FormEvent<HTMLInputElement>) => void;
	label: string;
	placeholder?: string;
	type?: string;
}

export const Input = ({
	value,
	setValue,
	label,
	placeholder,
	type = 'text',
}: InputProps) => {
	return (
		<label className={styles.label}>
			{label}
			<input
				className={styles.input}
				type={type}
				name={label}
				value={value}
				placeholder={placeholder}
				onChange={setValue}
			/>
		</label>
	);
};

import React, {FormEvent, ReactNode} from 'react';
import styles from '../../../styles/app/common/inputs.module.css';

export const Form: React.FC<{children: ReactNode}> = ({children}) => {
	return (
		<form className="mt-0 md:mt-2 flex flex-col gap-3 md:ml-12 shrink grow">
			{children}
		</form>
	);
};

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

import React, {FormEvent} from 'react';

export interface InputProps {
	value?: string;
	setValue: (event: FormEvent<HTMLInputElement>) => void;
	label: string;
	placeholder?: string;
}

export const ColorInput = ({
	value,
	setValue,
	label,
	placeholder,
}: InputProps) => {
	return (
		<label
			style={{
				display: 'flex',
				width: '100%',
				fontWeight: 'bold',
				paddingTop: '10px',
				gap: '10px',
			}}
		>
			{label}
			<input
				type="color"
				name={label}
				value={value}
				style={{
					padding: '0 2px',
					borderRadius: '5px',
					border: 'none',
				}}
				placeholder={placeholder}
				onChange={setValue}
			/>
		</label>
	);
};

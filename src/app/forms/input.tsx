import React, {FormEvent, ReactNode} from 'react';

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
		<label
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				fontWeight: 'bold',
				gap: '10px',
			}}
		>
			{label}
			<input
				className="text-black"
				type={type}
				name={label}
				value={value}
				style={{
					padding: '10px',
					borderRadius: '5px',
					border: 'none',
				}}
				placeholder={placeholder}
				onChange={setValue}
			/>
		</label>
	);
};

import React, {ChangeEvent, ReactNode} from 'react';

export const Form: React.FC<{children: ReactNode}> = ({children}) => {
	return (
		<form
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			{children}
		</form>
	);
};

export const Input: React.FC<{
	value?: string;
	setValue: (event: ChangeEvent) => void;
	label: string;
}> = ({value, setValue, label}) => {
	return (
		<label
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '350px',
				fontWeight: 'bold',
				gap: '10px',
			}}
		>
			{label}
			<input
				name={label}
				value={value}
				style={{
					padding: '10px',
					borderRadius: '5px',
					border: 'none',
				}}
				onChange={setValue}
			/>
		</label>
	);
};

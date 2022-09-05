import React, {ChangeEvent, ReactNode} from 'react';

export const Form: React.FC<{children: ReactNode}> = ({children}) => {
	return (
		<form
			style={{
				display: 'flex',
				flexDirection: 'column',
				margin: '20px 20px',
				gap: '20px',
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
			style={{display: 'flex', width: '350px', justifyContent: 'space-between'}}
		>
			{label}
			<input name={label} value={value} onChange={setValue} />
		</label>
	);
};

import React, {FormEvent, ReactNode} from 'react';

export const Form: React.FC<{children: ReactNode}> = ({children}) => {
	return <form className="flex flex-col gap-3 md:ml-24">{children}</form>;
};

export const Input: React.FC<{
	value?: string;
	setValue: (event: FormEvent<HTMLInputElement>) => void;
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
				type="text"
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

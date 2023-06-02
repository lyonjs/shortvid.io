import React, {ChangeEventHandler} from 'react';

export interface SelectInputProps {
	value?: string;
	setValue: ChangeEventHandler<HTMLSelectElement>;
	label: string;
	options?: string[];
}

export const SelectInput = ({
	value,
	setValue,
	label,
	options,
}: SelectInputProps) => {
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
			<select
				className="text-black"
				name={label}
				value={value}
				style={{
					padding: '10px',
					borderRadius: '5px',
					border: 'none',
					background: '#eaeaea',
				}}
				onChange={setValue}
			>
				{options?.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</label>
	);
};

import {FormEvent} from 'react';
import {format} from 'date-fns';

export const InputDate: React.FC<{
	value?: Date;
	setValue: (event: FormEvent<HTMLInputElement>) => void;
	label: string;
}> = ({value, setValue, label}) => {
	const formatedValue = value && format(value, 'yyyy-MM-dd HH:mm');

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
				type="datetime-local"
				name={label}
				value={formatedValue}
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

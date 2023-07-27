import {FormEvent} from 'react';
import {format} from 'date-fns';

import styles from '../../../styles/app/common/inputs.module.css';

export interface InputDateProps {
	value?: Date;
	setValue: (event: FormEvent<HTMLInputElement | HTMLSelectElement>) => void;
	label: string;
}

export const InputDate: React.FC<InputDateProps> = ({
	value,
	setValue,
	label,
}) => {
	const formatedValue = value && format(value, 'yyyy-MM-dd HH:mm');

	return (
		<label className={styles.label}>
			{label}
			<input
				className={styles.input}
				type="datetime-local"
				name={label}
				value={formatedValue}
				onChange={setValue}
			/>
		</label>
	);
};

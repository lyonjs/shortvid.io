import React, {ChangeEventHandler} from 'react';

import styles from '../../../styles/app/components/form/inputs.module.css';

export interface SelectInputProps {
	value?: string | undefined;
	setValue: ChangeEventHandler<HTMLSelectElement>;
	label: string;
	options?: (string | undefined)[];
}

export const SelectInput = ({
	value,
	setValue,
	label,
	options,
}: SelectInputProps) => {
	return (
		<label className={styles.label}>
			{label}
			<select
				className={styles.input}
				name={label}
				value={value}
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

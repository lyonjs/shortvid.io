import {ChangeEventHandler} from 'react';

import {top250} from '../../data/fonts';
import {useSelectedFont} from '../hooks/useSelectedFont';

import styles from '../../../styles/app/components/form/inputs.module.css';

export const FontPicker: React.FC<{
	label: string;
}> = ({label}) => {
	const {selectedFont, handleSetSelectedFont} = useSelectedFont();

	const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		handleSetSelectedFont(event.currentTarget.value);
	};

	return (
		<>
			<label className={styles.label}>
				{label}
				<select
					className={styles.input}
					name="fontFamilly"
					value={selectedFont}
					onChange={handleChange}
				>
					<option value="">-- Default --</option>
					{top250.map((f) => {
						return (
							<option key={f.family} value={f.family}>
								{f.family}
							</option>
						);
					})}
				</select>
			</label>
		</>
	);
};

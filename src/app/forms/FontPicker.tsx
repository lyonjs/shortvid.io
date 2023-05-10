import {ChangeEventHandler} from 'react';
import {top250} from '../../data/fonts';
import {useSelectedFont} from '../hooks/useSelectedFont';

export const FontPicker: React.FC<{
	label: string;
}> = ({label}) => {
	const {selectedFont, handleSetSelectedFont} = useSelectedFont();

	const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		handleSetSelectedFont(event.currentTarget.value);
	};

	return (
		<>
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
					name="fontFamilly"
					style={{
						padding: '10px',
						borderRadius: '5px',
						border: 'none',
					}}
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

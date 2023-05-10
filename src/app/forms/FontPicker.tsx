import {ChangeEventHandler, FormEvent, useContext, useEffect} from 'react';
import {top250} from '../../data/fonts';
import {FontContext} from '../../context/fonts/FontCountext';
import {loadGoogleFont} from '../utils/loadFont';

export const FontPicker: React.FC<{
	label: string;
}> = ({label}) => {
	const {selectedFont, setSelectedFont} = useContext(FontContext);
	const fontList = top250;

	useEffect(() => {
		loadGoogleFont(selectedFont);
	}, [selectedFont]);

	const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		setSelectedFont(event.currentTarget.value);
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
					{fontList.map((f) => {
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

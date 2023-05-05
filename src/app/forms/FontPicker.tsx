import {useEffect} from 'react';
import {top250} from '../../data/fonts';

// Without this type, loadFont retrun a Type error.
type RemotionFont = {
	loadFont: () => void;
};

export const FontPicker: React.FC<{
	label: string;
	selectedFont?: string;
	setSelectedFont: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({label, selectedFont, setSelectedFont}) => {
	const fontList = top250;

	useEffect(() => {
		(async function maybeLoadGoogleFont() {
			const gFont = fontList.find((font) => font.family === selectedFont);

			if (gFont) {
				const googleFont = (await gFont.load()) as RemotionFont;
				googleFont.loadFont();
			}
		})();
	}, [fontList, selectedFont]);

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
					defaultValue={selectedFont}
					onChange={setSelectedFont}
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

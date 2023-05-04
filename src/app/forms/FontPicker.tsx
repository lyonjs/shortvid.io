import {getAvailableFonts} from '@remotion/google-fonts';
import {useEffect} from 'react';

// Without this type, loadFont retrun a Type error.
type RemotionFont = {
	loadFont: () => void;
};

export const FontPicker: React.FC<{
	label: string;
	selectedFont: string;
	setSelectedFont: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({label, selectedFont, setSelectedFont}) => {
	const fontList = getAvailableFonts();

	useEffect(() => {
		(async function maybeLoadGoogleFont() {
			const gFont = fontList.find((font) => font.fontFamily === selectedFont);

			if (gFont) {
				const googleFont = (await gFont.load()) as RemotionFont;
				googleFont.loadFont();
			}
		})();
	}, [selectedFont]);

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
					{fontList.map((f) => {
						return (
							<option key={f.importName} value={f.fontFamily}>
								{f.fontFamily}
							</option>
						);
					})}
				</select>
			</label>
		</>
	);
};

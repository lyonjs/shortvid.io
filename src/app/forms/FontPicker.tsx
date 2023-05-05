import {ChangeEventHandler, FormEvent, useContext, useEffect} from 'react';
import {top250} from '../../data/fonts';
import {FontContext} from '../../context/fonts/FontCountext';

// Without this type, loadFont retrun a Type error.
type RemotionFont = {
	loadFont: () => void;
};

export const FontPicker: React.FC<{
	label: string;
	fontFamily: string | undefined;
	setFontFamily: (event: FormEvent<HTMLSelectElement>) => void;
}> = ({label, fontFamily, setFontFamily}) => {
	const {setSelectedFont} = useContext(FontContext);
	const fontList = top250;

	useEffect(() => {
		(async function maybeLoadGoogleFont() {
			const gFont = fontList.find((font) => font.family === fontFamily);

			if (gFont) {
				const googleFont = (await gFont.load()) as RemotionFont;
				googleFont.loadFont();
			}
		})();
	}, [fontList, fontFamily]);

	const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		setSelectedFont(event.currentTarget.value);
		setFontFamily(event);
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
					defaultValue={fontFamily}
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

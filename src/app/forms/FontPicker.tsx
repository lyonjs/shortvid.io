import {getAvailableFonts} from '@remotion/google-fonts';

export const FontPicker: React.FC<{
	setSelectedFont: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({setSelectedFont}) => {
	const newFonts = getAvailableFonts();

	return (
		<div>
			<input
				style={{color: 'black'}}
				name="fontFamilly"
				list="fontList"
				onChange={setSelectedFont}
			/>
			<datalist id="fontList">
				{newFonts.map((f) => {
					return <option key={f.importName} value={f.importName} />;
				})}
			</datalist>
		</div>
	);
};

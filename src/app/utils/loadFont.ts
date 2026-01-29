import {continueRender, delayRender, staticFile} from 'remotion';

export function loadLocalFont(
	fontName: string,
	fontLocalPath: string,
	format: 'woff2' | 'woff' | 'opentype' | 'truetype',
) {
	const waitForFont = delayRender('Loading local font...');
	const font = new FontFace(fontName, `url('${staticFile(fontLocalPath)}') format('${format}')`);

	font
		.load()
		.then(() => {
			document.fonts.add(font);
			continueRender(waitForFont);
		})
		.catch((err) => console.error('Error loading font', err));
}

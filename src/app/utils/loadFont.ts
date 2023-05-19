import {top250} from '../../data/fonts';
import {cancelRender, continueRender, delayRender, staticFile} from 'remotion';

type RemotionFont = {
	loadFont: () => void;
};

export async function loadGoogleFont(fontFamily: string) {
	const gFont = top250.find((font) => font.family === fontFamily);

	if (gFont) {
		const googleFont = (await gFont.load()) as RemotionFont;
		googleFont.loadFont();
	}
}

export function loadLocalFont(
	fontName: string,
	fontLocalPath: string,
	format: 'woff2' | 'woff' | 'opentype' | 'truetype'
) {
	const waitForFont = delayRender('Loading local font...');
	const font = new FontFace(
		fontName,
		`url('${staticFile(fontLocalPath)}') format('${format}')`
	);

	font
		.load()
		.then(() => {
			document.fonts.add(font);
			continueRender(waitForFont);
		})
		.catch((err) => console.error('Error loading font', err));
}

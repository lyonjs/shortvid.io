import {top250} from '../../data/fonts';

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

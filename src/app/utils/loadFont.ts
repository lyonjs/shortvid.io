import {top250} from '../../data/fonts';
import {useSearchParams} from 'next/navigation';

// Without this type, loadFont retrun a Type error.
type RemotionFont = {
	loadFont: () => void;
};

const fontList = top250;
export async function loadGoogleFont(fontFamily: string) {
	const gFont = fontList.find((font) => font.family === fontFamily);

	if (gFont) {
		const googleFont = (await gFont.load()) as RemotionFont;
		googleFont.loadFont();
	}
}

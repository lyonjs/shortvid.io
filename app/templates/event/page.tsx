'use client';

import {useInputChange} from '../../../src/app/hooks/onInputChange';
import {Player} from '@remotion/player';
import {Form, Input} from '../../../src/app/forms/input';
import {Code} from '../../../src/app/Code';
import {Event} from '../../../remotion/compositions/templates/event/Event';
import {encodeObjectValues} from '../../../src/app/utils/encodeObjectValues';
import {CopyUrlButton} from '../../../src/app/CopyUrlButton';
import {FontPicker} from '../../../src/app/forms/FontPicker';
import {useContext} from 'react';
import {FontContext} from '../../../src/context/fonts/FontCountext';

export default function EventPage() {
	const [title, setTitle] = useInputChange<string>('Apéro JS 🍾', 'title');
	const [lottieAsset, setLottieAsset] = useInputChange<string | undefined>(
		undefined,
		'lottieAsset'
	);
	const [paillettesAsset, setPaillettesAsset] = useInputChange<
		string | undefined
	>(undefined, 'paillettesAsset');
	const [backgroundImg, setBackgroundImg] = useInputChange<string | undefined>(
		undefined,
		'backgroundImg'
	);
	const {selectedFont} = useContext(FontContext);
	const storedFont = sessionStorage.getItem('selectedFont');
	const [fontFamily, setFontFamily] = useInputChange<string | undefined>(
		storedFont ?? selectedFont,
		'fontFamily'
	);

	const props = {
		title,
		lottieAsset,
		paillettesAsset,
		backgroundImg,
		fontFamily,
	};
	const encodedParams = encodeObjectValues(props);

	return (
		<>
			<div className="flex flex-col pb-4 justify-center items-center md:flex-row md:items-start">
				<Player
					autoPlay
					controls
					loop
					className="shrink-0 shadow-lg"
					style={{
						width: '400px',
						height: '400px',
					}}
					durationInFrames={180}
					compositionWidth={1200}
					compositionHeight={1200}
					fps={30}
					component={Event}
					inputProps={props}
				/>

				<Form>
					<FontPicker
						label="Font family"
						fontFamily={fontFamily}
						setFontFamily={setFontFamily}
					/>
					<Input setValue={setTitle} value={title} label="SpeakerName" />
					<Input
						setValue={setLottieAsset}
						value={lottieAsset}
						label="LottieAsset (lf20_UDstUT)"
					/>
					<Input
						setValue={setPaillettesAsset}
						value={paillettesAsset}
						label="PaillettesAsset (lf20_tiviyc3p)"
					/>
					<Input
						setValue={setBackgroundImg}
						value={backgroundImg}
						label="Background image url"
					/>
					<CopyUrlButton urlParameters={encodedParams} />
				</Form>
			</div>

			<Code composition="Event" params={props} />
		</>
	);
}

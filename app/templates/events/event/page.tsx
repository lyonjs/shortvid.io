'use client';

import {Player} from '@remotion/player';

import {Event} from '../../../../remotion/compositions/templates/event/Event';
import {Code} from '../../../../src/app/Code';
import {CopyUrlButton} from '../../../../src/app/CopyUrlButton';
import {FontPicker} from '../../../../src/app/forms/FontPicker';
import {Form, Input} from '../../../../src/app/forms/input';
import {useInputChange} from '../../../../src/app/hooks/useInputChange';
import {useSelectedFont} from '../../../../src/app/hooks/useSelectedFont';
import {encodeObjectValues} from '../../../../src/app/utils/encodeObjectValues';

export default function EventPage() {
	const [title, setTitle] = useInputChange<string>('Apéro JS 🍾', 'title');
	const [lottieAsset, setLottieAsset] = useInputChange<string | undefined>(
		undefined,
		'lottieAsset',
	);
	const [paillettesAsset, setPaillettesAsset] = useInputChange<
		string | undefined
	>(undefined, 'paillettesAsset');
	const [backgroundImg, setBackgroundImg] = useInputChange<string | undefined>(
		undefined,
		'backgroundImg',
	);

	const {selectedFont} = useSelectedFont();

	const props = {
		title,
		lottieAsset,
		paillettesAsset,
		backgroundImg,
		fontFamily: selectedFont,
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
					<FontPicker label="Font family" />
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

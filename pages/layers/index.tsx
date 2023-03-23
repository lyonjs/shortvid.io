import React, {useCallback, useState} from 'react';
import {LayerMode} from '../../src/types/layerMode.types';
import {Player} from '@remotion/player';
import {Form, Input} from '../../src/components/site/forms/input';
import {
	useInputChange,
	useSelectChange,
} from '../../src/components/hooks/onInputChange';
import LayerByMode from '../../src/components/site/LayerByMode';
import {SelectInput} from '../../src/components/site/forms/selectInput';

const Layers = () => {
	const [copied, setCopied] = useState(false);
	const [mode, setMode] = useSelectChange<LayerMode>('one');
	const [title, setTitle] = useInputChange<string>('LyonJS');
	const [sponsor, setSponsor] = useInputChange<string>(
		'https://secure.meetupstatic.com/photos/event/2/8/7/a/600_464230362.jpeg'
	);
	const props = {
		mode,
		title,
		sponsor,
	};
	const layerUrl = `/layers/${mode}/?title=${title}&sponsor=${encodeURIComponent(
		sponsor
	)}`;

	const onClickHandler = useCallback(() => {
		const {origin} = window.location;
		navigator.clipboard.writeText(`${origin}${layerUrl}`);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	}, [layerUrl]);

	return (
		<div className="flex flex-col pb-4 justify-center items-center md:flex-row md:items-start">
			<Player
				loop
				className="shrink-0 shadow-lg"
				style={{
					width: '350px',
					aspectRatio: '16 / 9',
				}}
				durationInFrames={1}
				compositionWidth={1920}
				compositionHeight={1080}
				fps={30}
				component={LayerByMode}
				inputProps={props}
			/>
			<Form>
				<SelectInput
					value={mode}
					setValue={setMode}
					label="Mode"
					options={['one', 'two', 'full']}
				/>
				<Input setValue={setTitle} value={title} label="Talk title" />
				<Input setValue={setSponsor} value={sponsor} label="Sponsor image" />
				<button
					type="button"
					className="font-bold mt-4"
					onClick={() => {
						window.open(layerUrl, '_blank');
					}}
				>
					Display Layer 👀
				</button>
				<button
					type="button"
					className="relative text-black py-2 px-4 text-center text-xl font-bold bg-yellow-300 rounded-xl mt-4 hover:scale-105"
					onClick={onClickHandler}
				>
					{copied ? 'Copied ✅' : 'Copy Layer URL 🔗'}
				</button>
			</Form>
		</div>
	);
};

Layers.noLayout = false;

export default Layers;

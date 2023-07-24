'use client';

import {useCallback, useState} from 'react';
import {Player} from '@remotion/player';

import {ResizeWrapper} from '../../../../src/app/components/sidebar/ResizeWrapper';
import {Sidebar} from '../../../../src/app/components/sidebar/Sidebar';
import {ColorInput} from '../../../../src/app/forms/colorInput';
import {Form} from '../../../../src/app/forms/Form';
import {Input} from '../../../../src/app/forms/input';
import {SelectInput} from '../../../../src/app/forms/selectInput';
import {useInputChange} from '../../../../src/app/hooks/useInputChange';
import LayerByMode from '../../../../src/app/LayerByMode';
import {LayerMode} from '../../../../src/app/types/layerMode.types';

import stylesBtn from '../../../../styles/app/common/buttons.module.css';
import styles from '../../../../styles/app/layout/main.module.css';

export default function LayersPage() {
	const [copied, setCopied] = useState(false);
	const [mode, setMode] = useInputChange<LayerMode>('one');
	const [title, setTitle] = useInputChange<string>('Shortvid.io 🎬');
	const [sponsor, setSponsor] = useInputChange<string>(
		'https://secure.meetupstatic.com/photos/event/2/8/7/a/600_464230362.jpeg'
	);
	const [primaryColor, setPrimaryColor] = useInputChange<string>('#323330');
	const [secondaryColor, setSecondaryColor] = useInputChange<string>('#efdb4f');
	const [decoration, setDecoration] = useInputChange<string>(
		'https://user-images.githubusercontent.com/60877626/232909816-ca4e61c0-acb2-469b-95dc-beed0cb6b482.png'
	);

	const props = {
		mode,
		title,
		sponsor,
		primaryColor,
		secondaryColor,
		decoration,
	};
	const layerUrl = `/screens/layers/${mode}/?title=${title}&sponsor=${sponsor}&primaryColor=${encodeURIComponent(
		primaryColor
	)}&secondaryColor=${encodeURIComponent(
		secondaryColor
	)}&decoration=${decoration}`;

	const onClickHandler = useCallback(() => {
		const {origin} = window.location;
		navigator.clipboard.writeText(`${origin}${layerUrl}`);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	}, [layerUrl]);

	return (
		<>
			<section className={styles.videoContainer}>
				<Player
					loop
					className={styles.video}
					style={{
						width: '100%',
						aspectRatio: '16 / 9',
					}}
					durationInFrames={1}
					compositionWidth={1920}
					compositionHeight={1080}
					fps={30}
					component={LayerByMode}
					inputProps={props}
				/>

				<div className={styles.formMobile}>
					<Form>
						<SelectInput
							value={mode}
							setValue={setMode}
							label="Mode"
							options={['one', 'two', 'full']}
						/>
						<ColorInput
							setValue={setPrimaryColor}
							value={primaryColor}
							label="Primary color"
						/>
						<ColorInput
							setValue={setSecondaryColor}
							value={secondaryColor}
							label="Secondary color"
						/>
						<Input setValue={setTitle} value={title} label="Talk title" />
						<Input
							setValue={setSponsor}
							value={sponsor}
							label="Sponsor image"
						/>
						<Input
							setValue={setDecoration}
							value={decoration}
							label="Layer decoration"
						/>
						<button
							type="button"
							className={stylesBtn.secondaryButton}
							onClick={() => {
								window.open(layerUrl, '_blank');
							}}
						>
							Display Layer 👀
						</button>
						<button
							type="button"
							className={stylesBtn.primaryButton}
							onClick={onClickHandler}
						>
							{copied ? 'Copied ✅' : 'Copy Layer URL 🔗'}
						</button>
					</Form>
				</div>
			</section>

			<ResizeWrapper resizableSide="left">
				<Sidebar>
					<Form>
						<SelectInput
							value={mode}
							setValue={setMode}
							label="Mode"
							options={['one', 'two', 'full']}
						/>
						<ColorInput
							setValue={setPrimaryColor}
							value={primaryColor}
							label="Primary color"
						/>
						<ColorInput
							setValue={setSecondaryColor}
							value={secondaryColor}
							label="Secondary color"
						/>
						<Input setValue={setTitle} value={title} label="Talk title" />
						<Input
							setValue={setSponsor}
							value={sponsor}
							label="Sponsor image"
						/>
						<Input
							setValue={setDecoration}
							value={decoration}
							label="Layer decoration"
						/>
						<button
							type="button"
							className={stylesBtn.secondaryButton}
							onClick={() => {
								window.open(layerUrl, '_blank');
							}}
						>
							Display Layer 👀
						</button>
						<button
							type="button"
							className={stylesBtn.primaryButton}
							onClick={onClickHandler}
						>
							{copied ? 'Copied ✅' : 'Copy Layer URL 🔗'}
						</button>
					</Form>
				</Sidebar>
			</ResizeWrapper>
		</>
	);
}

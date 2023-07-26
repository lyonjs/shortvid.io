'use client';

import {Player} from '@remotion/player';

import {ResizeWrapper} from '../../../../src/app/components/sidebar/ResizeWrapper';
import {Sidebar} from '../../../../src/app/components/sidebar/Sidebar';
import {ColorInput} from '../../../../src/app/forms/colorInput';
import {Form, FormConfigProps} from '../../../../src/app/forms/Form';
import {FullScreenButtons} from '../../../../src/app/forms/FullScreenButtons';
import {Input} from '../../../../src/app/forms/input';
import {SelectInput} from '../../../../src/app/forms/selectInput';
import {useInputChange} from '../../../../src/app/hooks/useInputChange';
import LayerByMode from '../../../../src/app/LayerByMode';
import {LayerMode} from '../../../../src/app/types/layerMode.types';
import {encodeObjectValues} from '../../../../src/app/utils/encodeObjectValues';

import styles from '../../../../styles/app/layout/main.module.css';

export default function LayersPage() {
	const [mode, setMode] = useInputChange<LayerMode>('one', 'mode');
	const [title, setTitle] = useInputChange<string>('Shortvid.io 🎬', 'title');
	const [sponsor, setSponsor] = useInputChange<string>(
		'https://secure.meetupstatic.com/photos/event/2/8/7/a/600_464230362.jpeg',
		'sponsor',
	);
	const [primaryColor, setPrimaryColor] = useInputChange<string>(
		'#323330',
		'primaryColor',
	);
	const [secondaryColor, setSecondaryColor] = useInputChange<string>(
		'#efdb4f',
		'secondaryColor',
	);
	const [decoration, setDecoration] = useInputChange<string>(
		'https://user-images.githubusercontent.com/60877626/232909816-ca4e61c0-acb2-469b-95dc-beed0cb6b482.png',
		'decoration',
	);

	const props = {
		mode,
		title,
		sponsor,
		primaryColor,
		secondaryColor,
		decoration,
	};

	const encodedParams = encodeObjectValues(props);

	const layerUrl = `/screens/layers/${mode}/?title=${title}&sponsor=${sponsor}&primaryColor=${encodeURIComponent(
		primaryColor,
	)}&secondaryColor=${encodeURIComponent(
		secondaryColor,
	)}&decoration=${decoration}`;

	const formConfig: FormConfigProps = {
		mode: {
			state: mode,
			setState: setMode,
			label: 'Mode',
			component: SelectInput,
			options: ['one', 'two', 'full'],
		},
		primaryColor: {
			state: primaryColor,
			setState: setPrimaryColor,
			label: 'Primary color',
			component: ColorInput,
		},
		secondaryColor: {
			state: secondaryColor,
			setState: setSecondaryColor,
			label: 'Secondary color',
			component: ColorInput,
		},
		title: {
			state: title,
			setState: setTitle,
			label: 'Talk title',
			component: Input,
		},
		sponsor: {
			state: sponsor,
			setState: setSponsor,
			label: 'Sponsor image',
			component: Input,
		},
		decoration: {
			state: decoration,
			setState: setDecoration,
			label: 'Layer decoration',
			component: Input,
		},
	};

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
					<Form data={props} compositionId={mode} formConfig={formConfig} encodedParams={encodedParams}>
						<FullScreenButtons
							compositionName="Layer"
							fullScreenUrl={layerUrl}
						/>
					</Form>
				</div>
			</section>

			<ResizeWrapper resizableSide="left">
				<Sidebar>
					<Form data={props} compositionId={mode} formConfig={formConfig} encodedParams={encodedParams}>
						<FullScreenButtons
							compositionName="Layer"
							fullScreenUrl={layerUrl}
						/>
					</Form>
				</Sidebar>
			</ResizeWrapper>
		</>
	);
}

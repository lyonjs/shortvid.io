'use client';

import {Player} from '@remotion/player';

import {Event} from '../../../../remotion/compositions/templates/event/Event';
import {Code} from '../../../../src/app/Code';
import {ResizeWrapper} from '../../../../src/app/components/sidebar/ResizeWrapper';
import {Sidebar} from '../../../../src/app/components/sidebar/Sidebar';
import {Form, FormConfigProps} from '../../../../src/app/forms/Form';
import {Input} from '../../../../src/app/forms/input';
import {useInputChange} from '../../../../src/app/hooks/useInputChange';
import {useSelectedFont} from '../../../../src/app/hooks/useSelectedFont';
import {encodeObjectValues} from '../../../../src/app/utils/encodeObjectValues';

import styles from '../../../../styles/app/layout/main.module.css';

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

	const formConfig: FormConfigProps = {
		title: {
			state: title,
			setState: setTitle,
			label: 'Speaker name',
			component: Input,
		},
		lottieAsset: {
			state: lottieAsset,
			setState: setLottieAsset,
			label: 'Lottie asset (ex: lf20_UDstUT)',
			component: Input,
			placeholder: 'lf20_UDstUT',
		},
		paillettesAsset: {
			state: paillettesAsset,
			setState: setPaillettesAsset,
			label: 'Paillettes asset (ex: lf20_tiviyc3p)',
			component: Input,
			placeholder: 'lf20_tiviyc3p',
		},
		backgroundImg: {
			state: backgroundImg,
			setState: setBackgroundImg,
			label: 'Background image url',
			component: Input,
		},
	};

	const compositionId = 'Event';

	return (
		<div className={styles.mainContent}>
			<section className={styles.videoContainer}>
				<Player
					autoPlay
					controls
					loop
					className={styles.video}
					style={{
						width: '100%',
						aspectRatio: '1/1',
					}}
					durationInFrames={180}
					compositionWidth={1200}
					compositionHeight={1200}
					fps={30}
					component={Event}
					inputProps={props}
				/>
				<div className={styles.formMobile}>
					<Form
						data={props}
						compositionId={compositionId}
						formConfig={formConfig}
						encodedParams={encodedParams}
					/>
				</div>
				<Code composition={compositionId} params={props} />
			</section>

			<div className={styles.formSidebar}>
				<ResizeWrapper resizableSide="left">
					<Sidebar>
						<Form
							data={props}
							compositionId={compositionId}
							formConfig={formConfig}
							encodedParams={encodedParams}
						/>
					</Sidebar>
				</ResizeWrapper>
			</div>
		</div>
	);
}

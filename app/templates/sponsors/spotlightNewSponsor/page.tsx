'use client';

import {Player} from '@remotion/player';

import {SpotlightNewSponsor} from '../../../../remotion/compositions/templates/sponsors/spotlightNewSponsor/SpotlightNewSponsor';
import {Code} from '../../../../src/app/Code';
import {ResizeWrapper} from '../../../../src/app/components/sidebar/ResizeWrapper';
import {Sidebar} from '../../../../src/app/components/sidebar/Sidebar';
import {Form, FormConfigProps} from '../../../../src/app/forms/Form';
import {Input} from '../../../../src/app/forms/input';
import {useInputChange} from '../../../../src/app/hooks/useInputChange';
import {encodeObjectValues} from '../../../../src/app/utils/encodeObjectValues';

import styles from '../../../../styles/app/layout/main.module.css';

export default function SpotlightNewSponsorPage() {
	const [logo, setLogo] = useInputChange<string>(
		'https://github.com/lyonjs/shortvid.io/assets/60877626/59faee28-9d56-4168-a58d-96342cc58d44',
		'logo',
	);
	const [sponsorLogo, setSponsorLogo] = useInputChange<string>(
		'https://github.com/lyonjs/shortvid.io/assets/60877626/a4155bda-d6b1-4e2b-8631-6450ef3bf768',
		'sponsorLogo',
	);

	const props = {logo, sponsorLogo};
	const encodedParams = encodeObjectValues(props);

	const formConfig: FormConfigProps = {
		logo: {
			state: logo,
			setState: setLogo,
			label: 'Logo url',
			component: Input,
		},
		sponsorLogo: {
			state: sponsorLogo,
			setState: setSponsorLogo,
			label: 'Sponsor logo url',
			component: Input,
		},
	};

	const compositionId = 'SpotlightNewSponsor';

	return (
		<>
			<section className={styles.videoContainer}>
				<Player
					autoPlay
					controls
					loop
					className={styles.video}
					style={{
						width: '100%',
						aspectRatio: '16/9',
					}}
					durationInFrames={750}
					compositionWidth={1920}
					compositionHeight={1080}
					fps={60}
					component={SpotlightNewSponsor}
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
		</>
	);
}

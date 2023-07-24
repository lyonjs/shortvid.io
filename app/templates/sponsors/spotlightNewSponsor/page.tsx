'use client';

import {Player} from '@remotion/player';

import {SpotlightNewSponsor} from '../../../../remotion/compositions/templates/sponsor/spotlightNewSponsor/SpotlightNewSponsor';
import {Code} from '../../../../src/app/Code';
import {ResizeWrapper} from '../../../../src/app/components/sidebar/ResizeWrapper';
import {Sidebar} from '../../../../src/app/components/sidebar/Sidebar';
import {CopyUrlButton} from '../../../../src/app/CopyUrlButton';
import {Form} from '../../../../src/app/forms/Form';
import {Input} from '../../../../src/app/forms/input';
import {useInputChange} from '../../../../src/app/hooks/useInputChange';
import {encodeObjectValues} from '../../../../src/app/utils/encodeObjectValues';

import styles from '../../../../styles/app/layout/main.module.css';

export default function SpotlightNewSponsorPage() {
	const [logo, setLogo] = useInputChange<string>(
		'https://github.com/lyonjs/shortvid.io/assets/60877626/59faee28-9d56-4168-a58d-96342cc58d44',
		'logo'
	);
	const [sponsorLogo, setSponsorLogo] = useInputChange<string>(
		'https://github.com/lyonjs/shortvid.io/assets/60877626/a4155bda-d6b1-4e2b-8631-6450ef3bf768',
		'sponsorLogo'
	);

	const props = {logo, sponsorLogo};
	const encodedParams = encodeObjectValues(props);

	return (
		<div className={styles.mainContent}>
			<section className={styles.videoContainer}>
				<Player
					autoPlay
					controls
					loop
					className="shrink-0 shadow-lg"
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

				<Code composition="SpotlightNewSponsor" params={props} />
			</section>

			<ResizeWrapper position="right">
				<Sidebar>
					<Form>
						<Input setValue={setLogo} value={logo} label="Logo url" />
						<Input
							setValue={setSponsorLogo}
							value={sponsorLogo}
							label="Sponsor logo url"
						/>

						<CopyUrlButton urlParameters={encodedParams} />
					</Form>
				</Sidebar>
			</ResizeWrapper>
		</div>
	);
}

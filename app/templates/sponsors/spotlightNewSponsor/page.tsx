'use client';

import {Player} from '@remotion/player';

import {SpotlightNewSponsor} from '../../../../remotion/compositions/templates/sponsor/spotlightNewSponsor/SpotlightNewSponsor';
import {Code} from '../../../../src/app/Code';
import {CopyUrlButton} from '../../../../src/app/CopyUrlButton';
import {Form, Input} from '../../../../src/app/forms/input';
import {useInputChange} from '../../../../src/app/hooks/useInputChange';
import {encodeObjectValues} from '../../../../src/app/utils/encodeObjectValues';

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

	return (
		<>
			<div className="flex flex-col pb-4 justify-center items-center md:flex-row md:items-start">
				<Player
					autoPlay
					controls
					loop
					className="shrink-0 shadow-lg"
					style={{
						width: '800px',
						height: '450px',
					}}
					durationInFrames={750}
					compositionWidth={1920}
					compositionHeight={1080}
					fps={60}
					component={SpotlightNewSponsor}
					inputProps={props}
				/>

				<Form>
					<Input setValue={setLogo} value={logo} label="Logo url" />
					<Input
						setValue={setSponsorLogo}
						value={sponsorLogo}
						label="Sponsor logo url"
					/>

					<CopyUrlButton urlParameters={encodedParams} />
				</Form>
			</div>

			<Code composition="SpotlightNewSponsor" params={props} />
		</>
	);
}

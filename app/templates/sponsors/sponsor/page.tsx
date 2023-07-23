'use client';

import {Player} from '@remotion/player';

import {Sponsor} from '../../../../remotion/compositions/templates/sponsor/Sponsor';
import {Code} from '../../../../src/app/Code';
import {CopyUrlButton} from '../../../../src/app/CopyUrlButton';
import {Form, Input} from '../../../../src/app/forms/input';
import {useInputChange} from '../../../../src/app/hooks/useInputChange';
import {encodeObjectValues} from '../../../../src/app/utils/encodeObjectValues';

export default function SponsorPage() {
	const [companyName, setCompanyName] = useInputChange<string>(
		'Evilcorp',
		'companyName',
	);
	const [backgroundImg, setBackgroundImg] = useInputChange<string | undefined>(
		undefined,
		'backgroundImg',
	);
	const [sponsorLogo, setSponsorLogo] = useInputChange<string | undefined>(
		undefined,
		'sponsorLogo',
	);
	const [sponsorLocalisation, setSponsorLocalisation] = useInputChange<
		string | undefined
	>(undefined, 'sponsorLocalisation');

	const props = {companyName, backgroundImg, sponsorLogo, sponsorLocalisation};
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
					durationInFrames={200}
					compositionWidth={1200}
					compositionHeight={1200}
					fps={30}
					component={Sponsor}
					inputProps={props}
				/>

				<Form>
					<Input
						setValue={setCompanyName}
						value={companyName}
						label="Company"
					/>
					<Input
						setValue={setBackgroundImg}
						value={backgroundImg}
						label="Background image url"
					/>
					<Input
						setValue={setSponsorLogo}
						value={sponsorLogo}
						label="Sponsor logo url"
					/>
					<Input
						setValue={setSponsorLocalisation}
						value={sponsorLocalisation}
						label="Sponsor localisation"
					/>
					<CopyUrlButton urlParameters={encodedParams} />
				</Form>
			</div>

			<Code composition="Sponsor" params={props} />
		</>
	);
}

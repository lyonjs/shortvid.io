'use client';

import {Player} from '@remotion/player';
import {Sponsor as SponsorComponent} from '../../../src/components';
import {useInputChange} from '../../../src/components/hooks/onInputChange';
import {Form, Input} from '../../../src/components/site/forms/input';
import {Code} from '../../../src/components/Code';

export default function SponsorPage() {
	const [companyName, setCompanyName] = useInputChange<string>('Evilcorp');
	const [backgroundImg, setBackgroundImg] = useInputChange<string | undefined>(
		undefined
	);
	const [sponsorLogo, setSponsorLogo] = useInputChange<string | undefined>(
		undefined
	);
	const [sponsorLocalisation, setSponsorLocalisation] = useInputChange<
		string | undefined
	>(undefined);

	const props = {companyName, backgroundImg, sponsorLogo, sponsorLocalisation};

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
					component={SponsorComponent}
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
				</Form>
			</div>

			<Code composition="Sponsor" params={props} />
		</>
	);
}

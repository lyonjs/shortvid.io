'use client';

import {Player} from '@remotion/player';

import {Sponsor} from '../../../../remotion/compositions/templates/sponsor/Sponsor';
import {Code} from '../../../../src/app/Code';
import {ResizeWrapper} from '../../../src/app/components/sidebar/ResizeWrapper';
import {Sidebar} from '../../../src/app/components/sidebar/Sidebar';
import {CopyUrlButton} from '../../../../src/app/CopyUrlButton';
import {Form} from '../../../src/app/forms/Form';
import {Input} from '../../../../src/app/forms/input';
import {useInputChange} from '../../../../src/app/hooks/useInputChange';
import {encodeObjectValues} from '../../../../src/app/utils/encodeObjectValues';
import styles from '../../../styles/app/layout/main.module.css';


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
					durationInFrames={200}
					compositionWidth={1200}
					compositionHeight={1200}
					fps={30}
					component={Sponsor}
					inputProps={props}
				/>

				<Code composition="Sponsor" params={props} />
			</section>

			<ResizeWrapper position="right">
				<Sidebar>
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
				</Sidebar>
			</ResizeWrapper>
		</div>
	);
}

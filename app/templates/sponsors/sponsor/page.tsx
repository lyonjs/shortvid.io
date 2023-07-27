'use client';

import {Player} from '@remotion/player';

import {Sponsor} from '../../../../remotion/compositions/templates/sponsor/Sponsor';
import {Code} from '../../../../src/app/Code';
import {ResizeWrapper} from '../../../../src/app/components/sidebar/ResizeWrapper';
import {Sidebar} from '../../../../src/app/components/sidebar/Sidebar';
import {Form, FormConfigProps} from '../../../../src/app/forms/Form';
import {Input} from '../../../../src/app/forms/input';
import {useInputChange} from '../../../../src/app/hooks/useInputChange';
import {encodeObjectValues} from '../../../../src/app/utils/encodeObjectValues';

import styles from '../../../../styles/app/layout/main.module.css';

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

	const formConfig: FormConfigProps = {
		companyName: {
			state: companyName,
			setState: setCompanyName,
			label: 'Company',
			component: Input,
		},
		backgroundImg: {
			state: backgroundImg,
			setState: setBackgroundImg,
			label: 'Background image url',
			component: Input,
		},
		sponsorLogo: {
			state: sponsorLogo,
			setState: setSponsorLogo,
			label: 'Sponsor logo url',
			component: Input,
		},
		sponsorLocalisation: {
			state: sponsorLocalisation,
			setState: setSponsorLocalisation,
			label: 'Sponsor localisation',
			component: Input,
		},
	};

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
						aspectRatio: '1/1',
					}}
					durationInFrames={200}
					compositionWidth={1200}
					compositionHeight={1200}
					fps={30}
					component={Sponsor}
					inputProps={props}
				/>
				<div className={styles.formMobile}>
					<Form formConfig={formConfig} encodedParams={encodedParams} />
				</div>
				<Code composition="Sponsor" params={props} />
			</section>

			<ResizeWrapper resizableSide="left">
				<Sidebar>
					<Form formConfig={formConfig} encodedParams={encodedParams} />
				</Sidebar>
			</ResizeWrapper>
		</>
	);
}

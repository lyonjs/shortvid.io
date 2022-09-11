import {Player} from '@remotion/player';
import {Sponsor as SponsorComponent} from '../src/components';
import {useInputChange} from '../src/components/hooks/onInputChange';
import {Form, Input} from '../src/components/input';
import {Code} from '../src/components/Code';

const Sponsor = () => {
	const [companyName, setCompanyName] = useInputChange('Evilcorp');
	const [backgroundImg, setBackgroundImg] = useInputChange();
	const [sponsorLogo, setSponsorLogo] = useInputChange();
	const [sponsorLocalisation, setSponsorLocalisation] = useInputChange();

	return (
		<>
			<div className="generation-block">
				<Player
					autoPlay
					controls
					loop
					style={{
						height: '400px',
						width: '400px',
						boxShadow: '0 0 5px -1px #000000',
					}}
					durationInFrames={200}
					compositionWidth={1200}
					compositionHeight={1200}
					fps={30}
					component={SponsorComponent}
					inputProps={{
						companyName,
						backgroundImg,
						sponsorLocalisation,
						sponsorLogo,
					}}
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
					<a
						href="https://github.com/lyonjs/social-video-generator/actions/workflows/render-sponsor.yml"
						target="_blank"
					>
						Generate your video 🎬
					</a>
				</Form>
			</div>

			<Code
				composition="Sponsor"
				params={{companyName, backgroundImg, sponsorLogo}}
			/>
		</>
	);
};

export default Sponsor;

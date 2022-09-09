import {Player} from '@remotion/player';
import {Sponsor as SponsorComponent} from '../src/components';
import {useInputChange} from '../src/components/hooks/onInputChange';
import {Form, Input} from '../src/components/input';
import {Code} from '../src/components/Code';

const Sponsor = () => {
	const [companyName, setCompanyName] = useInputChange('Evilcorp');
	const [backgroundImg, setBackgroundImg] = useInputChange();
	const [sponsorLogo, setSponsorLogo] = useInputChange();

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
					durationInFrames={120}
					compositionWidth={1200}
					compositionHeight={1200}
					fps={30}
					component={SponsorComponent}
					inputProps={{
						companyName,
						backgroundImg,
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
					<a
						href="https://github.com/lyonjs/social-video-generator/actions/workflows/render-sponsor.yml"
						target="_blank"
					>
						Generate your video 🎬
					</a>
				</Form>
			</div>

			<h3>Generate the video locally 🔗</h3>
			<Code>
				pnpm remotion render src/index.tsx Sponsor out/sponsor.mp4
				--props=&apos;
				{JSON.stringify({companyName, backgroundImg, sponsorLogo})}&apos;
			</Code>
		</>
	);
};

export default Sponsor;

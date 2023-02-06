import {useInputChange} from '../src/components/hooks/onInputChange';
import {Player} from '@remotion/player';
import {Form, Input} from '../src/components/input';
import {Code} from '../src/components/Code';
import {Event} from '../src/event/Event';

const Home = () => {
	const [title, setTitle] = useInputChange<string>('Apéro JS 🍾');
	const [lottieAsset, setLottieAsset] = useInputChange<string | undefined>(
		undefined
	);
	const [paillettesAsset, setPaillettesAsset] = useInputChange<
		string | undefined
	>(undefined);
	const [backgroundImg, setBackgroundImg] = useInputChange<string | undefined>(
		undefined
	);
	const props = {title, lottieAsset, paillettesAsset, backgroundImg};

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
					durationInFrames={180}
					compositionWidth={1200}
					compositionHeight={1200}
					fps={30}
					component={Event}
					inputProps={props}
				/>

				<Form>
					<Input setValue={setTitle} value={title} label="SpeakerName" />
					<Input
						setValue={setLottieAsset}
						value={lottieAsset}
						label="LottieAsset (lf20_UDstUT)"
					/>
					<Input
						setValue={setPaillettesAsset}
						value={paillettesAsset}
						label="PaillettesAsset (lf20_tiviyc3p)"
					/>
					<Input
						setValue={setBackgroundImg}
						value={backgroundImg}
						label="Background image url"
					/>
					<a
						className="text-black py-2 px-4 text-center text-xl font-bold bg-yellow-300 rounded-xl mt-4 hover:scale-105"
						href="https://github.com/lyonjs/social-video-generator/actions/workflows/render-meetup.yml"
						target="_blank"
					>
						Generate your video 🎬
					</a>
				</Form>
			</div>

			<Code composition="Event" params={props} />
		</>
	);
};

export default Home;

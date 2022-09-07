import {useInputChange} from '../src/components/hooks/onInputChange';
import {Player} from '@remotion/player';
import {Meetup as MeetupComponent} from '../src/meetup/Meetup';
import {Form, Input} from '../src/components/input';
import {Code} from '../src/components/Code';

const Home = () => {
	const [title, setTitle] = useInputChange('Example');
	const [date, setDate] = useInputChange('28 septembre 2022');
	const [backgroundImg, setBackgroundImg] = useInputChange();

	return (
		<>
			<h2>Meetup</h2>

			<div className="generation-block">
				<Player
					autoPlay
					controls
					loop
					style={{
						height: '400px',
						width: '400px',
					}}
					durationInFrames={120}
					compositionWidth={1200}
					compositionHeight={1200}
					fps={30}
					component={MeetupComponent}
					inputProps={{
						title,
						date,
						backgroundImg,
					}}
				/>

				<Form>
					<Input setValue={setTitle} value={title} label="Title" />
					<Input setValue={setDate} value={date} label="Date" />
					<Input
						setValue={setBackgroundImg}
						value={backgroundImg}
						label="Url of background image"
					/>
					<a
						href="https://github.com/lyonjs/social-video-generator/actions/workflows/render-meetup.yml"
						target="_blank"
					>
						Generate your video
					</a>
				</Form>
			</div>

			<h3>Generate the video locally</h3>
			<Code>
				pnpm remotion render src/index.tsx Meetup out/meetup.mp4 --props=&apos;
				{JSON.stringify({title, date, backgroundImg})}&apos;
			</Code>
		</>
	);
};

export default Home;

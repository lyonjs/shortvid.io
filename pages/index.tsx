import {useInputChange} from '../src/components/hooks/onInputChange';
import {Player} from '@remotion/player';
import {Meetup as MeetupComponent} from '../src/meetup/Meetup';
import {Form, Input} from '../src/components/input';
import {Code} from '../src/components/Code';

const Home = () => {
	const [title, setTitle] = useInputChange<string>('Example');
	const [date, setDate] = useInputChange<string>('28 septembre 2022');
	const [backgroundImg, setBackgroundImg] = useInputChange<string | undefined>(
		undefined
	);

	return (
		<>
			<div className="generation-block">
				<Player
					autoPlay
					controls
					loop
					style={{
						flexShrink: '0',
						height: '400px',
						width: '400px',
						boxShadow: '0 0 5px -1px #000000',
					}}
					durationInFrames={270}
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
						label="Background image url"
					/>
					<a
						href="https://github.com/lyonjs/social-video-generator/actions/workflows/render-meetup.yml"
						target="_blank"
					>
						Generate your video 🎬
					</a>
				</Form>
			</div>

			<Code composition="Meetup" params={{title, date, backgroundImg}} />
		</>
	);
};

export default Home;

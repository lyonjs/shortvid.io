import {useInputChange} from '../src/components/hooks/onInputChange';
import {Player} from '@remotion/player';
import {Meetup as MeetupComponent} from '../src/meetup/Meetup';
import {Code} from '../src/components/Code';
import {Form, Input} from '../src/components/site/forms/input';

const Home = () => {
	const [title, setTitle] = useInputChange<string>('Example');
	const [eventLogo, setEventLogo] = useInputChange<string>('');
	const [date, setDate] = useInputChange<string>('28 septembre 2022');
	const [backgroundImg, setBackgroundImg] = useInputChange<string | undefined>(
		undefined
	);
	const props = {title, date, backgroundImg, eventLogo};

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
					durationInFrames={270}
					compositionWidth={1200}
					compositionHeight={1200}
					fps={30}
					component={MeetupComponent}
					inputProps={props}
				/>

				<Form>
					<Input setValue={setTitle} value={title} label="SpeakerName" />
					<Input setValue={setDate} value={date} label="Date" />

					<Input
						setValue={setBackgroundImg}
						value={backgroundImg}
						label="Background image url"
					/>
					<Input
						setValue={setEventLogo}
						value={eventLogo}
						label="Event Logo (optional)"
						placeholder="e.g: https://avatars.githubusercontent.com/u/929689?s=200&v=4"
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

			<Code composition="Meetup" params={props} />
		</>
	);
};

export default Home;

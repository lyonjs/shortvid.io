import {Player} from '@remotion/player';
import {Meetup as MeetupComponent} from '../../remotion-components/src/components';
import {useInputChange} from '../components/hooks/onInputChange';
import {Form, Input} from '../components/input';

const Meetup = () => {
	const [title, setTitle] = useInputChange('Example');
	const [date, setDate] = useInputChange('28 septembre 2022');
	const [backgroundImg, setBackgroundImg] = useInputChange();

	return (
		<>
			<h2>Meetup</h2>
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
		</>
	);
};

export default Meetup;

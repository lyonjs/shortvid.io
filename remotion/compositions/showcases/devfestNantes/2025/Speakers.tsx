import {loadFont} from '@remotion/google-fonts/Cinzel';
import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig} from 'remotion';

import {Text} from '../../../../design/atoms/Text';
import {AvatarWithCaption} from '../../../../design/molecules/AvatarWithCaption';
import {Speaker} from '../../../../types/defaultProps.types';

const {fontFamily} = loadFont();

export const Speakers: React.FC<{
	speakers: Speaker[];
	isTotemDisplayMode?: boolean;
}> = ({speakers, isTotemDisplayMode}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const pictureUp = spring({
		frame: frame,
		fps,
		from: -1000,
		to: isTotemDisplayMode ? -100 : -320,
		durationInFrames: 60,
	});

	const plantseUp = spring({
		frame: frame,
		fps,
		from: -500,
		to: isTotemDisplayMode ? -100 : 80,
		durationInFrames: 60,
		config: {
			mass: 1,
			damping: 11,
		},
	});

	const nameOpacity = spring({
		frame: frame - 40,
		fps,
		from: 0,
		to: 1,
		durationInFrames: 60,
	});

	const nameUnblur = interpolate(frame - 40, [0, 20], [5, 0], {
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				gap: isTotemDisplayMode ? 0 : 100,
			}}
		>
			{speakers.map((speaker) => {
				return (
					<div
						key={speaker.name}
						style={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Img style={{
							position: 'absolute',
							bottom: plantseUp,
							left: '25%',
							width: '180px'
						}} alt="fdds" src={staticFile('images/showcases/devfestNantes/2025/plantes.png')} />
						<Img style={{
							position: 'absolute',
							bottom: plantseUp,
							left: '60%',
							width: '180px'
						}} alt="fdds" src={staticFile('images/showcases/devfestNantes/2025/plantes.png')} />
						<AvatarWithCaption
							avatarPictureUrl={speaker.picture}
							avatarStyle={{
								width: 180,
								height: 180,
								border: 'none',
								boxShadow: '0 0 0 5px #CD8141',
								bottom: pictureUp,
							}}
							style={{
								zIndex: '2',
								gap: 0,
							}}
						>
							<>
								<Text
									style={{
										fontFamily,
										color: 'white',
										textShadow: '0 0 20px black',
										letterSpacing: '0.1rem',
										position: 'relative',
										bottom: isTotemDisplayMode ? '-50%' : '-122%',
										width: 350,
										height: 100,
										fontSize: 25,
										fontWeight: 700,
										opacity: nameOpacity,
										filter: `blur(${nameUnblur}px)`,
									}}
								>
									{speaker.name}
								</Text>
							</>
						</AvatarWithCaption>
					</div>
				);
			})}
		</AbsoluteFill>
	);
};

import {Composition, Folder} from 'remotion';
import {Sponsor} from './sponsor/Sponsor';
import {LyonJSLogo} from './components/LyonJSLogo';
import {ImageBackground} from './components/ImageBackground';
import {Title} from './components/Title';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Folder name="Components">
				<Composition
					component={LyonJSLogo}
					width={1200}
					height={1200}
					id="LyonJSLogo"
					fps={30}
					durationInFrames={120}
				/>
				<Composition
					component={ImageBackground}
					width={1200}
					height={1200}
					id="ImageBackground"
					fps={30}
					durationInFrames={120}
					defaultProps={{animated: true}}
				/>
				<Composition
					component={Title}
					width={1200}
					height={1200}
					id="Title"
					fps={30}
					durationInFrames={120}
					defaultProps={{children: 'Hello'}}
				/>
			</Folder>
			<Folder name="Sponsor">
				<Composition
					component={Sponsor}
					width={1200}
					height={1200}
					id="Sponsor"
					fps={30}
					durationInFrames={120}
					defaultProps={{
						sponsorLogo:
							'https://www.indy.fr/wp-content/themes/indy/img/logo-indy-new.svg',
					}}
				/>
			</Folder>
		</>
	);
};

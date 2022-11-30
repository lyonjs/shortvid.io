import {Player} from '@remotion/player';
import {Meetup} from '../src/meetup/Meetup';
import {Talk} from '../src/talk/Talk';
import {Sponsor} from '../src/sponsor/Sponsor';
import {Event} from '../src/event/Event';

interface Video {
	id: string;
	template: React.FC<any>;
	params: {
		[key: string]: string;
	};
}

const VIDEO_LIST: Video[] = [
	{
		id: 'Meetup announce',
		template: Meetup,
		params: {
			title: 'LyonJS de la rentrée 🦁',
			date: '28 septembre 2022',
			backgroundImg:
				'https://user-images.githubusercontent.com/6263857/188308094-03b94a76-bc0b-4b62-98b0-d041996a3e16.png',
		},
	},
	{
		id: 'Talk announce',
		template: Talk,
		params: {
			speakersNames: 'Julien Sulpis',
			talkTitle:
				'REX : Mise en place d’un Design System en web components chez Groupama',
			backgroundImg:
				'https://user-images.githubusercontent.com/6263857/188308094-03b94a76-bc0b-4b62-98b0-d041996a3e16.png',
			speakerPicture: 'https://avatars2.githubusercontent.com/u/22420399?v=4',
			titleSize: '50',
		},
	},
	{
		id: 'Sponsor',
		template: Sponsor,
		params: {
			companyName: 'Indy',
			sponsorLocalisation: '94 Rue Robert',
			backgroundImg:
				'https://user-images.githubusercontent.com/6263857/188308094-03b94a76-bc0b-4b62-98b0-d041996a3e16.png',
			sponsorLogo:
				'https://www.indy.fr/wp-content/themes/indy/img/logo-indy-new.svg',
		},
	},
	{
		id: 'Event',
		template: Event,
		params: {
			title: 'Apéro JS 🍾',
		},
	},
];

const Home = () => {
	return (
		<>
			<h2 className="text-2xl pb-4 font-bold">
				Here you can find a set of example videos
			</h2>
			<section className="grid grid-cols-2 gap-12 py-4">
				{VIDEO_LIST.map((video) => {
					return (
						<article key={video.id}>
							<header>
								<h3 className="text-xl pb-3 text-yellow-300 font-bold">
									{video.id}
								</h3>
							</header>
							<Player
								autoPlay
								controls
								loop
								className="shrink-0 shadow-lg"
								style={{
									width: '100%',
									height: '350px',
								}}
								durationInFrames={270}
								compositionWidth={1200}
								compositionHeight={1200}
								fps={30}
								component={video.template}
								inputProps={video.params}
							/>
						</article>
					);
				})}
			</section>
		</>
	);
};

export default Home;

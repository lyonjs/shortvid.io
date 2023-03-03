import {
	Snowcamp,
	TouraineTechProps,
} from '../../src/conference/snowcamp/Snowcamp';
import {Devoxx2023} from '../../src/conference/devoxx2023/Devoxx2023';
import {MixitIntroTalk} from '../../src/conference/mixit2023/MixitIntroTalk';
import {TouraineTech2023} from '../../src/conference/touraineTech2023/TouraineTech2023';
import {VeryTechTrip} from '../../src/conference/very-tech-trip/VeryTechTrip';
import {Player} from '@remotion/player';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import {useState} from 'react';
import {Code} from '../../src/components/Code';

const sampleData: TouraineTechProps = {
	title: "Remotion : le 7ème art à portée de composants web et d'API 🎬",
	speakers: [
		{
			name: 'Mickaël Alves',
			picture:
				'https://pbs.twimg.com/profile_images/1452247219709566977/5Xzmgun-_400x400.jpg',
		},
		{
			name: 'Antoine Caron',
			picture:
				'https://pbs.twimg.com/profile_images/1619099163018371077/xFDqbqUJ_400x400.jpg',
		},
	],
	date: '27 janvier 2023',
	time: '14h00',
	location: 'Salle Kilimanjaro',
};

interface TalkTemplate {
	component: React.FC<any>;
	width: number;
	height: number;
	compositionName: string;
	durationInFrames: number;
}

const Template: Record<string, TalkTemplate> = {
	Devoxx: {
		compositionName: 'Devoxx2023',
		component: Devoxx2023,
		width: 1280,
		height: 720,
		durationInFrames: 300,
	},
	Mixit: {
		compositionName: 'Mixit2023',
		component: MixitIntroTalk,
		width: 1280,
		height: 720,
		durationInFrames: 150,
	},
	Snowcamp: {
		compositionName: 'Snowcamp',
		component: Snowcamp,
		width: 1280,
		height: 720,
		durationInFrames: 150,
	},
	TouraineTech: {
		compositionName: 'TouraineTech2023',
		component: TouraineTech2023,
		width: 1280,
		height: 720,
		durationInFrames: 150,
	},
	VeryTechTrip: {
		compositionName: 'VeryTechTrip',
		component: VeryTechTrip,
		width: 720,
		height: 720,
		durationInFrames: 150,
	},
};
const Conference: React.FC<{conference: string}> = ({conference}) => {
	const currentTemplate = Template[conference];
	const [data, setData] = useState(sampleData);

	return (
		<div>
			<nav className="my-4">
				<h1 className="text-2xl pb-4 font-bold">
					List of available templates for partner conferences:
				</h1>

				<ul className="list-disc pl-8">
					{Object.keys(Template).map((name) => (
						<li key={name}>
							<a href={`/conferences/${name}`}>{name}</a>
						</li>
					))}
				</ul>
			</nav>

			<h2 className="text-2xl pb-4 font-bold">{conference}</h2>

			<div className="flex flex-col gap-10 pb-4 justify-center items-center">
				<Player
					autoPlay
					controls
					loop
					className="shrink-0 shadow-lg"
					style={{
						width: '800px',
						height: '450px',
					}}
					durationInFrames={currentTemplate.durationInFrames}
					compositionWidth={currentTemplate.width}
					compositionHeight={currentTemplate.height}
					fps={30}
					component={currentTemplate.component}
					inputProps={data || sampleData}
				/>
				<JSONInput
					placeholder={sampleData}
					theme="light_mitsuketa_tribute"
					locale={locale}
					colors={{
						string: '#DAA520',
					}}
					style={{
						body: {
							border: 'solid 3px #DAA520',
							borderRadius: '5px',
						},
					}}
					height="300px"
					width="800px"
					onChange={(event: {jsObject: any}) => {
						setData(event.jsObject);
					}}
				/>
			</div>

			<Code
				composition={currentTemplate.compositionName}
				params={data || sampleData}
			/>
		</div>
	);
};

export async function getStaticPaths() {
	return {
		paths: Object.keys(Template).map((key) => ({
			params: {conferenceName: key},
		})),
		fallback: false,
	};
}

export async function getStaticProps({
	params,
}: {
	params: {conferenceName: string};
}) {
	return {
		props: {
			conference: params.conferenceName,
		},
	};
}

export default Conference;

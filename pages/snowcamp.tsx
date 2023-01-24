import {useState} from 'react';
import {Player} from '@remotion/player';
import {Snowcamp as SnowcampComponent} from '../src/components';
import {Code} from '../src/components/Code';
import {TouraineTechProps} from '../src/snowcamp/Snowcamp';

import locale from 'react-json-editor-ajrm/locale/en';
import JSONInput from 'react-json-editor-ajrm/index';

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
				'https://pbs.twimg.com/profile_images/1530252527769374721/C9SKUOQ9_400x400.jpg',
		},
	],
	date: '27 janvier 2023',
	time: '14h00',
	location: 'Salle Kilimanjaro',
};

const Snowcamp = () => {
	const [data, setData] = useState(sampleData);

	return (
		<>
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
					durationInFrames={120}
					compositionWidth={1280}
					compositionHeight={720}
					fps={30}
					component={SnowcampComponent}
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
				<a
					className="text-black py-2 px-4 text-center text-xl font-bold bg-yellow-300 rounded-xl mt-4 hover:scale-105"
					href="https://github.com/lyonjs/social-video-generator/actions/workflows/render-talk.yml"
					target="_blank"
				>
					Generate your video 🎬
				</a>
			</div>

			<Code composition="Snowcamp" params={data || sampleData} />
		</>
	);
};

export default Snowcamp;

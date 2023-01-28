import {ChangeEvent, useCallback, useState} from 'react';
import {Player} from '@remotion/player';
import {Code} from '../src/components/Code';

import locale from 'react-json-editor-ajrm/locale/en';
import JSONInput from 'react-json-editor-ajrm/index';
import {VeryTechTrip} from '../src/conference/very-tech-trip/VeryTechTrip';
import {TouraineTechProps} from '../src/conference/snowcamp/Snowcamp';
import {Snowcamp} from '../src/conference/snowcamp/Snowcamp';
import {TouraineTech2023} from '../src/conference/touraineTech2023/TouraineTech2023';
import {Mixit2023} from '../src/conference/mixit2023/Mixit2023';

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
}

const Template: Record<string, TalkTemplate> = {
	VeryTechTrip: {
		compositionName: 'VeryTechTrip',
		component: VeryTechTrip,
		width: 720,
		height: 720,
	},
	Snowcamp: {
		compositionName: 'Snowcamp',
		component: Snowcamp,
		width: 1280,
		height: 720,
	},
	TouraineTech2023: {
		compositionName: 'TouraineTech2023',
		component: TouraineTech2023,
		width: 1280,
		height: 720,
	},
	VeryTechTrip: {
		compositionName: 'VeryTechTrip',
		component: VeryTechTrip,
		width: 720,
		height: 720,
	},
	Mixit:{
		compositionName: 'Mixit2023',
		component: Mixit2023,
		width: 1280,
		height: 720,
	},
};

const Conference = () => {
	const [data, setData] = useState(sampleData);
	const [currentTemplate, setTemplate] = useState(Object.values(Template)[0]);

	const onChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
		setTemplate(Template[e.target.value]);
	}, []);

	return (
		<>
			<div className="flex flex-col gap-10 pb-4 justify-center items-center">
				<select
					id="Component"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					onChange={onChange}
				>
					{Object.keys(Template).map((value) => (
						<option key={value}>{value}</option>
					))}
				</select>
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
		</>
	);
};

export default Conference;

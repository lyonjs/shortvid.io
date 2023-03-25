'use client';

import {Snowcamp} from '../../../../remotion/compositions/showcases/snowcamp/Snowcamp';
import {Devoxx2023} from '../../../../remotion/compositions/showcases/devoxx2023/Devoxx2023';
import {MixitIntroTalk} from '../../../../remotion/compositions/showcases/mixit2023/MixitIntroTalk';
import {TouraineTech2023} from '../../../../remotion/compositions/showcases/touraineTech2023/TouraineTech2023';
import {VeryTechTrip} from '../../../../remotion/compositions/showcases/very-tech-trip/VeryTechTrip';
import {Player} from '@remotion/player';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import {useState} from 'react';
import {defaultTalkValues} from '../../../../src/data/defaultValues';
import {AlpesCraft} from '../../../../remotion/compositions/showcases/alpescraft/AlpesCraft';
import {Code} from '../../../../src/app/Code';

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
	AlpesCraft: {
		compositionName: 'AlpesCraft',
		component: AlpesCraft,
		width: 1280,
		height: 720,
		durationInFrames: 200,
	},
};
export default function ConferencePage({
	params,
}: {
	params: {conferenceName: string};
}) {
	const conference = params.conferenceName;
	const currentTemplate = Template[conference];
	const [data, setData] = useState(defaultTalkValues);

	return (
		<div>
			<nav className="my-4">
				<h1 className="text-2xl pb-4 font-bold">
					List of available templates for partner conferences:
				</h1>

				<ul className="list-disc pl-8">
					{Object.keys(Template).map((name) => (
						<li key={name}>
							<a href={`/showcases/conferences/${name}`}>{name}</a>
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
					inputProps={data || defaultTalkValues}
				/>
				<JSONInput
					placeholder={defaultTalkValues}
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
						console.log(event.jsObject);
						setData(event.jsObject);
					}}
				/>
			</div>

			<Code
				composition={currentTemplate.compositionName}
				params={data || defaultTalkValues}
			/>
		</div>
	);
}

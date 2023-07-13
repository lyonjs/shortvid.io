'use client';

import {useState} from 'react';

import {Player} from '@remotion/player';
import _ = require('lodash');
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';

import {AlpesCraft} from '../../../../remotion/compositions/showcases/alpescraft/AlpesCraft';
import {CampingDesSpeakers} from '../../../../remotion/compositions/showcases/campingDesSpeakers/CampingDesSpeakers';
import {Devoxx2023} from '../../../../remotion/compositions/showcases/devoxx/Devoxx2023';
import {MixitIntroTalk} from '../../../../remotion/compositions/showcases/mixit/MixitIntroTalk';
import {Snowcamp} from '../../../../remotion/compositions/showcases/snowcamp/Snowcamp';
import {TouraineTech2023} from '../../../../remotion/compositions/showcases/touraineTech/TouraineTech2023';
import {VeryTechTrip} from '../../../../remotion/compositions/showcases/veryTechTrip/VeryTechTrip';
import {Volcamp} from '../../../../remotion/compositions/showcases/volcamp/Volcamp';
import {TalkBrandedProps} from '../../../../remotion/compositions/templates/talk/branded/TalkBranded';
import {DefaultProps} from '../../../../remotion/types/defaultProps.types';
import {Code} from '../../../../src/app/Code';
import {defaultTalkValues} from '../../../../src/data/defaultValues';
import {ReplayProps} from '../../../templates/replay/page';
interface TalkTemplate {
	component: React.FC<any>;
	width: number;
	height: number;
	compositionName: string;
	durationInFrames: number;
	fps?: number;
	defaultProps?:
		| {[key: string]: string | undefined}
		| DefaultProps
		| ReplayProps
		| TalkBrandedProps;
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
	CampingDesSpeakers: {
		compositionName: 'CampingDesSpeakers',
		component: CampingDesSpeakers,
		width: 1280,
		height: 720,
		durationInFrames: 450,
		fps: 60,
		defaultProps: _.merge(
			{
				speakers: [{company: 'Zenika'}, {company: 'Bedrock'}],
			},
			defaultTalkValues
		),
	},
	Volcamp2023: {
		compositionName: 'Volcamp-2023',
		component: Volcamp,
		width: 1280,
		height: 720,
		durationInFrames: 300,
		defaultProps: _.merge(
			{
				themeName: 'Web & Mobile',
				speakers: [
					{company: 'https://zenika.com/static/images/favicon-32x32.png'},
					{
						company:
							'https://bedrockstreaming.com/assets/favicon/apple-icon-57x57.png',
					},
				],
			},
			defaultTalkValues
		),
	},
};
export default function ConferencePage({
	params,
}: {
	params: {conferenceName: string};
}) {
	const conference = params.conferenceName;
	const currentTemplate = Template[conference];
	const [data, setData] = useState(
		currentTemplate.defaultProps || defaultTalkValues
	);

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
					fps={currentTemplate.fps || 30}
					component={currentTemplate.component}
					inputProps={data || defaultTalkValues}
				/>
				<JSONInput
					placeholder={currentTemplate.defaultProps || defaultTalkValues}
					theme="light_mitsuketa_tribute"
					locale={locale}
					colors={{
						string: '#7B2CBF',
					}}
					style={{
						body: {
							border: 'solid 3px #c77dff',
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
				params={data || defaultTalkValues}
			/>
		</div>
	);
}

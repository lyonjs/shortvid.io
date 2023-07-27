'use client';

import {SetStateAction, useState} from 'react';
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
import {Code} from '../../../../src/app/Code';
import {
	DefaultPropsTypes,
	TemplateTypes,
} from '../../../../src/app/types/template.types';
import {defaultTalkValues} from '../../../../src/data/defaultValues';

import styles from '../../../../styles/app/layout/main.module.css';

interface TalkTemplate {
	component: TemplateTypes;
	width: number;
	height: number;
	compositionName: string;
	durationInFrames: number;
	fps?: number;
	defaultProps?: DefaultPropsTypes;
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
			defaultTalkValues,
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
			defaultTalkValues,
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
		currentTemplate.defaultProps || defaultTalkValues,
	);

	return (
		<div className={styles.mainContent}>
			<section className={styles.videoContainer}>
				<h2>{conference}</h2>
				<Player
					autoPlay
					controls
					loop
					className={styles.video}
					style={{
						width: '100%',
						aspectRatio: '16/9',
					}}
					durationInFrames={currentTemplate.durationInFrames}
					compositionWidth={currentTemplate.width}
					compositionHeight={currentTemplate.height}
					fps={currentTemplate.fps || 30}
					component={currentTemplate.component as never}
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
					width="100%"
					onChange={(event: {jsObject: SetStateAction<DefaultPropsTypes>}) => {
						setData(event.jsObject);
					}}
				/>
				<Code
					composition={currentTemplate.compositionName}
					params={data || defaultTalkValues}
				/>
			</section>
		</div>
	);
}

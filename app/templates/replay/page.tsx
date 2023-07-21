'use client';

import {ChangeEvent, useCallback, useState} from 'react';
import JSONInput from 'react-json-editor-ajrm/index';
import locale from 'react-json-editor-ajrm/locale/en';
import {Player} from '@remotion/player';

import {ReplayLyonJS} from '../../../remotion/compositions/showcases/lyonJS/Replay';
import {Speaker} from '../../../remotion/types/defaultProps.types';
import {Code} from '../../../src/app/Code';

export interface ReplayProps {
	title: string;
	speakers: Speaker[];
	date: string;
	sponsor: string;
}

const sampleData: ReplayProps = {
	title: 'Meetup #80 : Projet XState',
	speakers: [
		{
			name: 'Maxime Blanc',
			picture: 'https://ca.slack-edge.com/T108ZKPMF-U3VL71HHU-179292d5d86f-512',
		},
	],
	date: '8 férvrier 2023',
	sponsor:
		'https://s3.eu-west-3.amazonaws.com/moovijob.prod/1494438/Horizontal_Black_Logo-Zenika.png',
};

interface ReplayTemplate {
	component: React.FC<any>;
	width: number;
	height: number;
	compositionName: string;
}

const Template: Record<string, ReplayTemplate> = {
	LyonJS: {
		compositionName: 'LyonJSReplay',
		component: ReplayLyonJS,
		width: 1920,
		height: 1080,
	},
};

export default function ReplayPage() {
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
					durationInFrames={300}
					compositionWidth={currentTemplate.width}
					compositionHeight={currentTemplate.height}
					fps={60}
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
}

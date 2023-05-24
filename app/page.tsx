'use client';

import React from 'react';
import {Player} from '@remotion/player';
import {Meetup} from '../remotion/compositions/templates/meetup/Meetup';
import {Talk} from '../remotion/compositions/templates/talk/Talk';
import {Sponsor} from '../remotion/compositions/templates/sponsor/Sponsor';
import {Event} from '../remotion/compositions/templates/event/Event';
import RootLayout from '../src/app/RootLayout';

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

const PARTNERS = [
	{
		name: 'Touraine Tech',
		logo: '/images/conferences/touraineTech.svg',
		site: 'https://touraine.tech/',
	},
	{
		name: 'Mixit',
		logo: '/images/conferences/mixit.svg',
		site: 'https://mixitconf.org/',
	},
	{
		name: 'Camping des Speakers',
		logo: '/images/conferences/campingDesSpeakers/campingDesSpeakers.png',
		site: 'https://camping-speakers.fr/',
	},
];

export default function Home() {
	return (
		<RootLayout>
			<h2 className="text-2xl pb-4 font-bold">
				What is the goal of this projet ?
			</h2>

			<p className="mt-2">
				For the moment, templates are not very generic and are branded LyonJS
				but{' '}
				<strong>
					we have the ambition to provide much more generic templates that could
					be used by anyone who wants to generate videos for all the meetups,
					conferences or companies that want to use them.
				</strong>
			</p>

			<p className="mt-2 font-bold">
				If you are a meetup or conference organizer and you are interested in
				this tool and you would like to have some help,{' '}
				<a href="https://github.com/lyonjs/shortvid.io/discussions/categories/conference-meetup-communication">
					don&lsquo;t hesitate to open a discussion on our Github and we will
					see what can be done.
				</a>
			</p>

			<p className="mt-2">
				We know it&lsquo;s a pain to generate all the communication materials
				for an event, so this project allows us to generate everything from
				configuration JSON.
			</p>

			<p className="mt-2">
				We can generate <strong>MP4 videos, Gif, JPEG, PNG</strong> in a
				programmatic way. Some common uses:
			</p>

			<ul className="mt-2 list-disc pl-8">
				<li>generate a video to announce your sponsors</li>
				<li>
					generate images for the display screens of your conference venues.
				</li>
				<li>
					generate videos for your speakers to announce their participation and
					talks.
				</li>
				<li>And many more ideas...</li>
			</ul>

			<h2 className="text-2xl pb-4 pt-8 font-bold">
				Conference and partner events
			</h2>

			<section className="flex gap-3 items-stretch items-center">
				{PARTNERS.map((partner) => (
					<a
						key={partner.name}
						href={partner.site}
						className="bg-slate-200 p-4 rounded-md w-1/2 md:w-1/3 flex justify-center"
						target="_blank"
					>
						{/* eslint-disable-next-line @remotion/warn-native-media-tag */}
						<img
							src={partner.logo}
							alt={partner.name}
							className="block max-h-32"
						/>
					</a>
				))}
			</section>

			<h2 className="text-2xl pb-4 pt-8 font-bold">
				Here you can find a set of example videos
			</h2>

			<section className="grid grid-cols-1 md:grid-cols-2 gap-12 py-4">
				{VIDEO_LIST.map((video) => {
					return (
						<article key={video.id}>
							<header>
								<h3 className="text-xl pb-3 text-purple-200 font-bold">
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
		</RootLayout>
	);
}

'use client';

import Image from 'next/image';
import Link from 'next/link';

import {Contact} from '../src/app/components/landingPage/Contact';
import {Footer} from '../src/app/components/landingPage/Footer';
import {Hero} from '../src/app/components/landingPage/Hero';
import {Header} from '../src/app/components/sidebar/navigation/Header';

import buttonStyles from '../styles/app/common/buttons.module.css';
import styles from '../styles/app/layout/landing/landing.module.css';

const PARTNERS = [
	{
		name: 'Touraine Tech',
		logo: '/images/showcases/touraineTech/touraineTechLogo.svg',
		site: 'https://touraine.tech/',
	},
	{
		name: 'Mixit',
		logo: '/images/showcases/mixit/mixitLogo2023.svg',
		site: 'https://mixitconf.org/',
	},
	{
		name: 'Camping des Speakers',
		logo: '/images/showcases/campingDesSpeakers/campingDesSpeakersLogo.png',
		site: 'https://camping-speakers.fr/',
	},
];

export default function Home() {
	return (
		<>
			<Header expanded={true} className={styles.landingHeader}>
				<Link
					href="/templates/talks/talk"
					className={`${buttonStyles.btn} ${buttonStyles.btnPrimary} ${styles.headerCTA}`}
				>
					Get Started
				</Link>
			</Header>
			<main className={styles.homeMain}>
				<Hero />

				<h2 className="text-2xl pb-4 font-bold">
					What is the goal of this projet ?
				</h2>

				<p className="mt-2">
					For the moment, templates are not very generic and are branded LyonJS
					but{' '}
					<strong>
						we have the ambition to provide much more generic templates that
						could be used by anyone who wants to generate videos for all the
						meetups, conferences or companies that want to use them.
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
						generate videos for your speakers to announce their participation
						and talks.
					</li>
					<li>And many more ideas...</li>
				</ul>

				<h2 className="text-2xl pb-4 pt-8 font-bold">
					Conference and partner events
				</h2>

				<section className="flex gap-3 items-stretch">
					{PARTNERS.map((partner) => (
						<a
							key={partner.name}
							href={partner.site}
							className="bg-slate-200 p-4 rounded-md w-1/2 md:w-1/3 flex justify-center"
							target="_blank"
						>
							<Image
								width={300}
								height={300}
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

				<Contact />

				<Footer />
			</main>
		</>
	);
}

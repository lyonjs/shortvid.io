'use client';

import Link from 'next/link';

import {Contact} from '../src/app/components/landingPage/Contact';
import {Footer} from '../src/app/components/landingPage/Footer';
import {Hero} from '../src/app/components/landingPage/Hero';
import {Partners} from '../src/app/components/landingPage/Partners';
import {Sponsors} from '../src/app/components/landingPage/Sponsors';
import {Header} from '../src/app/components/sidebar/navigation/Header';

import buttonStyles from '../styles/app/common/buttons.module.css';
import styles from '../styles/app/layout/landing/landing.module.css';

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

				<Partners />
				<Sponsors />
				<section className={styles.github}>
					<Link
						href="https://github.com/lyonjs/shortvid.io/discussions"
						target="_blank"
					>
						<h3>Open Github discussion</h3>
						<p>
							If you would like a showcase video for your event or if you have
							an idea of a new template, we can create them! All you have to do
							is open a discussion on our Github so that we can exchange with
							you about it.
						</p>
						<p>
							You can also create your own template and showcases yourself by
							forking the project, like that you will have access to all the
							templates already in the app in addition of your customs ones.
						</p>
					</Link>
				</section>
				<Contact />

				<Footer />
			</main>
		</>
	);
}

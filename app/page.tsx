'use client';

import {CaseStudy} from '../src/app/components/landingPage/CaseStudy';
import {Contact} from '../src/app/components/landingPage/Contact';
import {Faq} from '../src/app/components/landingPage/Faq';
import {Features} from '../src/app/components/landingPage/Features';
import {Footer} from '../src/app/components/landingPage/Footer';
import {Github} from '../src/app/components/landingPage/Github';
import {Hero} from '../src/app/components/landingPage/Hero';
import {HowItWorks} from '../src/app/components/landingPage/HowItWorks';
import {OpenSourceCallout} from '../src/app/components/landingPage/OpenSourceCallout';
import {Partners} from '../src/app/components/landingPage/Partners';
import {UseCases} from '../src/app/components/landingPage/UseCases';

import styles from '../styles/app/layout/landing/landing.module.css';

export default function Home() {
	return (
		<main className={styles.homeMain}>
			<Hero />
			<Features />
			<UseCases />
			<HowItWorks />
			<Partners />
			<CaseStudy />
			<OpenSourceCallout />
			<Github />
			<Faq />
			<Contact />
			<Footer />
		</main>
	);
}

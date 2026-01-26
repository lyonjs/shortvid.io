'use client';

import {AnimatedSection} from '../src/app/components/AnimatedSection';
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
			<AnimatedSection>
				<Features />
			</AnimatedSection>
			<AnimatedSection>
				<UseCases />
			</AnimatedSection>
			<AnimatedSection>
				<HowItWorks />
			</AnimatedSection>
			<AnimatedSection>
				<Partners />
			</AnimatedSection>
			<AnimatedSection animation="scale">
				<CaseStudy />
			</AnimatedSection>
			<AnimatedSection animation="fade">
				<OpenSourceCallout />
			</AnimatedSection>
			<AnimatedSection>
				<Github />
			</AnimatedSection>
			<AnimatedSection>
				<Faq />
			</AnimatedSection>
			<AnimatedSection animation="fade">
				<Contact />
			</AnimatedSection>
			<Footer />
		</main>
	);
}

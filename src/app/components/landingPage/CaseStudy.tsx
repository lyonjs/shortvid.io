import Image from 'next/image';

import styles from '../../../../styles/app/layout/landing/caseStudy.module.css';

const CASE_STUDY = {
	event: 'DevFest Nantes',
	eventUrl: 'https://devfest.gdgnantes.com/',
	logo: '/images/showcases/devfestNantes/2024/logo-devfest-2024.png',
	description:
		'DevFest Nantes is an annual developer conference organized by GDG Nantes, covering web/mobile development, cloud computing, AI, and software trends at the Cité des Congrès.',
	quote:
		'Shortvid.io enabled us to quickly generate videos that showcased event details, speaker information, and key highlights. The videos were displayed on TV screens throughout the venue for session information and room locations.',
	author: 'GDG Nantes Team',
	highlights: [
		{value: '2000+', label: 'Attendees'},
		{value: '100+', label: 'Sessions'},
		{value: '50+', label: 'Videos generated'},
	],
	features: [
		'Speaker announcement videos',
		'Session schedules on screens',
		'Room location displays',
		'Social media content',
	],
	remotionStoryUrl: 'https://www.remotion.dev/success-stories/shortvid',
};

export const CaseStudy = () => {
	return (
		<section className={styles.caseStudy}>
			<div className={styles.header}>
				<span className={styles.badge}>Success Story</span>
				<h2>Trusted by DevFest Nantes</h2>
				<p className={styles.subtitle}>{CASE_STUDY.description}</p>
			</div>

			<div className={styles.content}>
				<div className={styles.mainCard}>
					<div className={styles.logoWrapper}>
						<Image
							src={CASE_STUDY.logo}
							alt={`${CASE_STUDY.event} logo`}
							width={180}
							height={180}
							className={styles.logo}
						/>
					</div>

					<div className={styles.highlights}>
						{CASE_STUDY.highlights.map(({value, label}) => (
							<div key={label} className={styles.highlight}>
								<span className={styles.value}>{value}</span>
								<span className={styles.label}>{label}</span>
							</div>
						))}
					</div>

					<blockquote className={styles.quote}>
						<p>{CASE_STUDY.quote}</p>
						<footer>
							<cite>{CASE_STUDY.author}</cite>
						</footer>
					</blockquote>

					<div className={styles.features}>
						<h3>How they use Shortvid.io</h3>
						<ul>
							{CASE_STUDY.features.map((feature) => (
								<li key={feature}>{feature}</li>
							))}
						</ul>
					</div>

					<div className={styles.actions}>
						<a
							href={CASE_STUDY.eventUrl}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.linkSecondary}
						>
							Visit {CASE_STUDY.event}
						</a>
						<a
							href={CASE_STUDY.remotionStoryUrl}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.linkPrimary}
						>
							Read the full story on Remotion
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

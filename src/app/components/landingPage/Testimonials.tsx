import {TESTIMONIALS} from '../../../data/config/landingPageConfig';

import styles from '../../../../styles/app/layout/landing/testimonials.module.css';

export const Testimonials = () => {
	return (
		<section className={styles.testimonials}>
			<h2>What organizers say</h2>
			<div className={styles.grid}>
				{TESTIMONIALS.map(({quote, author, role}) => (
					<blockquote key={author} className={styles.testimonialCard}>
						<p>{quote}</p>
						<footer>
							<cite>{author}</cite>
							<span>{role}</span>
						</footer>
					</blockquote>
				))}
			</div>
		</section>
	);
};

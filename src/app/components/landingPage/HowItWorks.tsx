import {HOW_IT_WORKS} from '../../../data/config/landingPageConfig';

import styles from '../../../../styles/app/layout/landing/howItWorks.module.css';

export const HowItWorks = () => {
	return (
		<section className={styles.howItWorks}>
			<h2>How it works</h2>
			<div className={styles.steps}>
				{HOW_IT_WORKS.map(({step, title, description}) => (
					<div key={step} className={styles.step}>
						<div className={styles.stepNumber}>{step}</div>
						<h3>{title}</h3>
						<p>{description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

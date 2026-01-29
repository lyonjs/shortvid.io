import {USE_CASES} from '../../../data/config/landingPageConfig';

import styles from '../../../../styles/app/layout/landing/useCases.module.css';

export const UseCases = () => {
	return (
		<section className={styles.useCases}>
			<h2>Built for event organizers</h2>
			<div className={styles.grid}>
				{USE_CASES.map(({title, description, examples, emoji}) => (
					<div key={title} className={styles.useCaseCard}>
						<span className={styles.cardIcon}>{emoji}</span>
						<h3>{title}</h3>
						<p>{description}</p>
						<div className={styles.examples}>
							{examples.map((example) => (
								<span key={example} className={styles.tag}>
									{example}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

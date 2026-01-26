import {Icon} from '@iconify/react';

import {FEATURES} from '../../../data/config/landingPageConfig';

import styles from '../../../../styles/app/layout/landing/features.module.css';

export const Features = () => {
	return (
		<section className={styles.features}>
			<h2>What can you create?</h2>
			<div className={styles.grid}>
				{FEATURES.map(({title, description, icon, examples}) => (
					<div key={title} className={styles.featureCard}>
						<div className={styles.iconWrapper}>
							<Icon icon={icon} className={styles.icon} />
						</div>
						<h3>{title}</h3>
						<p>{description}</p>
						{examples && (
							<ul className={styles.examples}>
								{examples.map((example) => (
									<li key={example}>{example}</li>
								))}
							</ul>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

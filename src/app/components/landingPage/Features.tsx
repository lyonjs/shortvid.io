import {Icon} from '@iconify/react';

import {FEATURES} from '../../../data/config/landingPageConfig';

import styles from '../../../../styles/app/layout/landing/features.module.css';

export const Features = () => {
	return (
		<section className={styles.features}>
			<h2>What can you create?</h2>
			<div className={styles.grid}>
				{FEATURES.map(({title, description, icon}) => (
					<div key={title} className={styles.featureCard}>
						<div className={styles.iconWrapper}>
							<Icon icon={icon} className={styles.icon} />
						</div>
						<h3>{title}</h3>
						<p>{description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

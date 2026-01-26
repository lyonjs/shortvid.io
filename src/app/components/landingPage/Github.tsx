import {Icon} from '@iconify/react';
import Link from 'next/link';

import styles from '../../../../styles/app/layout/landing/landing.module.css';

export const Github = () => {
	return (
		<section className={styles.github}>
			<h3>Need a custom template?</h3>
			<p>
				Want a showcase video for your event or have an idea for a new template? Open a discussion
				on GitHub and we&apos;ll work together to create it!
			</p>
			<p>
				You can also fork the project and create your own templates with full access to all existing
				designs.
			</p>
			<Link
				href="https://github.com/lyonjs/shortvid.io/discussions"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Icon icon="mdi:github" width={20} height={20} />
				Start a discussion
			</Link>
		</section>
	);
};

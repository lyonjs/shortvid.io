import {Icon} from '@iconify/react';
import Link from 'next/link';

import styles from '../../../../styles/app/layout/landing/openSource.module.css';

export const OpenSourceCallout = () => {
	return (
		<section className={styles.openSource}>
			<div className={styles.content}>
				<Icon icon="mdi:open-source-initiative" className={styles.icon} />
				<h2>Open Source & Built on Remotion</h2>
				<p>
					Shortvid.io is fully open-source and built with{' '}
					<Link href="https://www.remotion.dev/" target="_blank" rel="noopener noreferrer">
						Remotion
					</Link>
					, the React framework for creating videos programmatically.
				</p>
				<p>
					Contribute, customize, or self-host to fit your needs. Join our community and help make
					event content creation easier for everyone.
				</p>
				<div className={styles.links}>
					<Link
						href="https://github.com/lyonjs/shortvid.io"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.githubBtn}
					>
						<Icon icon="mdi:github" />
						View on GitHub
					</Link>
					<Link
						href="https://www.remotion.dev/docs"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.remotionBtn}
					>
						Learn Remotion
					</Link>
				</div>
			</div>
		</section>
	);
};

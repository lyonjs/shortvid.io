import {Icon} from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

import buttonStyles from '../../../../styles/app/common/buttons.module.css';
import styles from '../../../../styles/app/layout/landing/hero.module.css';

export const Hero = () => {
	return (
		<section className={styles.hero}>
			<Image
				src="/branding/full-logo-with-mono-vertical.svg"
				alt="Shortvid.io"
				width={200}
				height={150}
			/>
			<h1>Generate event content in seconds, not hours</h1>
			<h2>
				Create videos, images, and PDFs for your conferences and meetups.
				<br />
				Open-source, powered by React and Remotion.
			</h2>

			<div className={styles.cta}>
				<Link
					href="https://editor.shortvid.io"
					className={`${buttonStyles.btn} ${buttonStyles.btnPrimary}`}
				>
					Try the Editor
				</Link>
				<Link
					href="https://github.com/lyonjs/shortvid.io"
					target="_blank"
					rel="noopener noreferrer"
					className={`${buttonStyles.btn} ${buttonStyles.btnSecondary}`}
				>
					<Icon icon="mdi:github" style={{marginRight: '0.5rem'}} />
					View on GitHub
				</Link>
			</div>
		</section>
	);
};

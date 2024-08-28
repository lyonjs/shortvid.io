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
			<h1>Simplify your social media communications</h1>
			<h2>
				Choose among various templates to customise with your assets and
				contents.
				<br />
				Then generate and download your video in one click
			</h2>

			<div className={styles.cta}>
				<Link
					href="https://github.com/lyonjs/shortvid.io/blob/main/CONTRIBUTING.md"
					className={`${buttonStyles.btn} ${buttonStyles.btnText}`}
				>
					Contributing
				</Link>
			</div>
		</section>
	);
};

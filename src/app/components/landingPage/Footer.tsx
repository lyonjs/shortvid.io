import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../../../styles/app/layout/footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Image
				src="/branding/monogram.svg"
				alt="Shortvid.io monogram"
				width={70}
				height={70}
				className={styles.footerLogo}
			/>
			<nav className={styles.footerNav}>
				<Link
					href="https://github.com/lyonjs/shortvid.io"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub
				</Link>
				<Link
					href="https://github.com/lyonjs/shortvid.io/discussions"
					target="_blank"
					rel="noopener noreferrer"
				>
					Discussions
				</Link>
				<Link
					href="https://github.com/lyonjs/shortvid.io/blob/main/CONTRIBUTING.md"
					target="_blank"
					rel="noopener noreferrer"
				>
					Contributing
				</Link>
			</nav>
			<Link
				href="https://www.remotion.dev/"
				target="_blank"
				rel="noopener noreferrer"
				className={styles.remotionLink}
			>
				Powered by Remotion
			</Link>
			<span>© Copyright 2024 Shortvid.io - Made with 💜 and React</span>
		</footer>
	);
};

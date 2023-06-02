'use client';
import Image from 'next/image';
import styles from '../../styles/app/layout/footer.module.css';
import {staticFile} from 'remotion';
import {Logo} from './logo';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Logo size={20} className={styles.logo} />
			<a
				href="https://vercel.com?utm_source=lyonjs&utm_campaign=oss"
				className={styles.vercelLight}
			>
				<Image
					alt="Vercel"
					width="200"
					height="100"
					src={staticFile('/branding/powered-by-vercel-white.svg')}
				/>
			</a>
			<span>© Copyright 2023 LyonJs - Made with 💜 and JS</span>
		</footer>
	);
};

import styles from '../../styles/app/layout/footer.module.css';
import React from 'react';
import {Logo} from './Logo';
import {PoweredByVercel} from './PoweredByVercel';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Logo className={styles.footerLogo} />
			<div className={styles.bottomBar}>
				<span>© Copyright 2023 LyonJs - Made with 💜 and JS</span>
				<a
					href="https://vercel.com?utm_source=lyonjs&utm_campaign=oss"
					className={styles.vercelLight}
				>
					<PoweredByVercel />
				</a>
			</div>
		</footer>
	);
};

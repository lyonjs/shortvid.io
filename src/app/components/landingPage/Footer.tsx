import React from 'react';

import {Logo} from '../../Logo';
import {PoweredByVercel} from '../../PoweredByVercel';
import {SwitchThemeButtons} from '../../SwitchThemeButtons';

import styles from '../../../../styles/app/layout/footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Logo className={styles.footerLogo} />
			<div className={styles.bottomBar}>
				<a
					href="https://vercel.com?utm_source=lyonjs&utm_campaign=oss"
					className={styles.vercelLight}
				>
					<PoweredByVercel />
				</a>
				<SwitchThemeButtons />
			</div>
			<span>© Copyright 2023 LyonJs - Made with 💜 and JS</span>
		</footer>
	);
};

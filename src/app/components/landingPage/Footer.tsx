import React from 'react';
import Image from 'next/image';

import {PoweredByVercel} from '../../PoweredByVercel';
import {SwitchThemeButtons} from '../../SwitchThemeButtons';

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

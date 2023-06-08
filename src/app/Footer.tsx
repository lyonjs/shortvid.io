'use client';
import Image from 'next/image';
import styles from '../../styles/app/layout/footer.module.css';
import {staticFile} from 'remotion';
import React from 'react';
import {useThemeName} from './hooks/useThemeName';
import {Logo} from './Logo';

const PoweredByVercelImg = ({src}: {src: string}) => {
	return <Image alt="Vercel" width="200" height="100" src={staticFile(src)} />;
};

export const Footer = () => {
	const theme = useThemeName();
	return (
		<footer className={styles.footer}>
			<Logo className={styles.footerLogo} />
			<a
				href="https://vercel.com?utm_source=lyonjs&utm_campaign=oss"
				className={styles.vercelLight}
			>
				{theme === 'light' && (
					<PoweredByVercelImg src="/images/app/powered-by-vercel-black.svg" />
				)}
				{theme === 'dark' && (
					<PoweredByVercelImg src="/images/app/powered-by-vercel-white.svg" />
				)}
			</a>
			<span role="copyright">
				© Copyright 2023 LyonJs - Made with 💜 and JS
			</span>
		</footer>
	);
};

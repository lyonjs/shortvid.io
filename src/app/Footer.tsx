import Image from 'next/image';
import styles from '../../styles/app/layout/footer.module.css';
import {staticFile} from 'remotion';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Image
				className={styles.logo}
				src="/branding/monogram-white.svg"
				alt="Shortvid.io logo"
				width={20}
				height={20}
			/>
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
			<span>© Copyright 2023 LyonJs - Made with 💛 and JS</span>
		</footer>
	);
};

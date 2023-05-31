import Image from 'next/image';
import styles from '../../styles/app/footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Image
				className={styles.logo}
				src="/branding/monogram-white.svg"
				alt="Shorvid.io logo"
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
					src="https://images.ctfassets.net/e5382hct74si/78Olo8EZRdUlcDUFQvnzG7/fa4cdb6dc04c40fceac194134788a0e2/1618983297-powered-by-vercel.svg"
				/>
			</a>
			<span>© Copyright 2023 LyonJs - Made with 💛 and JS</span>
		</footer>
	);
};

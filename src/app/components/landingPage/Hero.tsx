import buttonStyles from '../../../../styles/app/common/buttons.module.css';
import styles from '../../../../styles/app/layout/landing/hero.module.css';

export const Hero = () => {
	return (
		<section className={styles.hero}>
			<h1>Simplify your social media communications</h1>
			<h2>
				Choose among various templates to customise with your assets and
				contents.
				<br />
				Then generate and download your video in one click
			</h2>

			<div className={styles.cta}>
				<a
					href="/templates/talks/talk"
					className={`${buttonStyles.btn} ${buttonStyles.btnSecondary}`}
				>
					Get Started
				</a>
				<a
					href="https://github.com/lyonjs/shortvid.io/blob/main/CONTRIBUTING.md"
					className={`${buttonStyles.btn} ${buttonStyles.btnText}`}
				>
					Contributing
				</a>
			</div>
		</section>
	);
};

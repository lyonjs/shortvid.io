import styles from '../../../../styles/app/components/sidebar/sidebar.module.css';
import {Logo} from '../../Logo';
import {Nav} from './Nav';
import {SwitchThemeButtons} from '../../SwitchThemeButtons';
import {Icon} from '@iconify/react';
import {MuseoModerno} from 'next/font/google';

const wormarkFont = MuseoModerno({
	weight: '900',
	subsets: ['latin'],
});

export const Sidebar = () => {
	return (
		<section className={styles.sidebar}>
			<header>
				<a href="/" className={styles.logoLink}>
					<Logo />
					<h1 className={wormarkFont.className}>Shortvid.io</h1>
				</a>
			</header>
			<Nav />
			<footer>
				<a
					href="https://github.com/lyonjs/shortvid.io"
					className={styles.contributeLink}
				>
					<Icon icon="mdi:github" />
					Contributing
				</a>
				<SwitchThemeButtons />
			</footer>
		</section>
	);
};

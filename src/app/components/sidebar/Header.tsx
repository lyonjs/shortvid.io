import {Icon} from '@iconify/react';
import {MuseoModerno} from 'next/font/google';

import {Logo} from '../../Logo';

import styles from '../../../../styles/app/components/sidebar/sidebar.module.css';

const wordmarkFont = MuseoModerno({
	weight: '900',
	subsets: ['latin'],
});

export const Header: React.FC<{expanded: boolean,setOpenBurger: (value: boolean) => void;}> = ({expanded,setOpenBurger}) => {
	return (
		<header>
			<a href="/" className={styles.logoLink}>
				<Logo />
				{expanded && <h1 className={wordmarkFont.className}>Shortvid.io</h1>}
			</a>
			<button
				type="button"
				aria-label="openBurgerBtn"
				className={styles.openBurgerBtn}
				onClick={() => setOpenBurger(true)}
			>
				<Icon icon="entypo:menu" />
			</button>
		</header>
	);
};

import {ReactNode} from 'react';
import {MuseoModerno} from 'next/font/google';

import {Logo} from '../../../Logo';

import styles from '../../../../../styles/app/components/sidebar/sidebar.module.css';

const wordmarkFont = MuseoModerno({
	weight: '900',
	subsets: ['latin'],
});

export const Header: React.FC<{expanded: boolean; children?: ReactNode}> = ({
	expanded,
	children,
}) => {
	return (
		<header>
			<a href="/" className={styles.logoLink}>
				<Logo />
				{expanded && <h1 className={wordmarkFont.className}>Shortvid.io</h1>}
			</a>
			{children}
		</header>
	);
};

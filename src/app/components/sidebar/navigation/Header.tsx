import {ReactNode} from 'react';
import {MuseoModerno} from 'next/font/google';
import Link from 'next/link';

import {Logo} from '../../../Logo';

import styles from '../../../../../styles/app/components/sidebar/sidebar.module.css';

const wordmarkFont = MuseoModerno({
	weight: '900',
	subsets: ['latin'],
});

export const Header: React.FC<{
	expanded: boolean;
	className?: string;
	children?: ReactNode;
}> = ({expanded, className, children}) => {
	return (
		<header className={className}>
			<nav>
				<Link href="/" className={styles.logoLink}>
					<Logo />
					{expanded && <h2 className={wordmarkFont.className}>Shortvid.io</h2>}
				</Link>
				{children}
			</nav>
		</header>
	);
};

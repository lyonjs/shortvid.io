import styles from '../../../../styles/app/components/sidebar/sidebar.module.css';
import {Logo} from '../../Logo';
import {MuseoModerno} from 'next/font/google';

const wormarkFont = MuseoModerno({
	weight: '900',
	subsets: ['latin'],
});

export const Header: React.FC<{expanded: boolean}> = ({expanded}) => {
	return (
		<header>
			<a href="/" className={styles.logoLink}>
				<Logo />
				{expanded && <h1 className={wormarkFont.className}>Shortvid.io</h1>}
			</a>
		</header>
	);
};
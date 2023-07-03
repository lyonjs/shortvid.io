import styles from '../../../../styles/app/components/sidebar/sidebar.module.css';
import {Logo} from '../../Logo';

export const Header: React.FC<{folded: boolean}> = ({folded}) => {
	return (
		<header>
			<a href="/" className={styles.logoLink}>
				<Logo />
				{!folded && <h1>Shortvid.io</h1>}
			</a>
		</header>
	);
};

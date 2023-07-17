'use client';

import {Footer} from './Footer';
import {Header} from './Header';
import {Nav} from './Nav';
import styles from '../../../../../styles/app/components/sidebar/sidebar.module.css';

export const Sidebar: React.FC<{expanded: boolean}> = ({expanded}) => {
	return (
		<section
			className={`${styles.sidebar} ${styles.sidebarDesktop}`}
			aria-label="sidebar"
		>
			<Header expanded={expanded} />
			<Nav expanded={expanded} />
			<Footer expanded={expanded} />
		</section>
	);
};

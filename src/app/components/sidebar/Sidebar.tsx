'use client';

import {cloneElement, ReactElement, useContext} from 'react';

import {Icon} from '@iconify/react';

import styles from '../../../../styles/app/components/sidebar/sidebar.module.css';
import {SidebarContext} from '../../../context/SidebarContext';

export const Sidebar: React.FC<{children: ReactElement}> = ({children}) => {
	const {expanded, setExpanded} = useContext(SidebarContext);

	return (
		<section
			className={`${styles.sidebar} ${styles.sidebarDesktop}`}
			aria-expanded={expanded}
			aria-label="sidebar"
		>
			{cloneElement(children, {expanded})}
			<button
				type="button"
				aria-label="foldButton"
				className={styles.foldButton}
				onClick={() => setExpanded(!expanded)}
			>
				<Icon icon="iconamoon:arrow-left-2" />
			</button>
		</section>
	);
};

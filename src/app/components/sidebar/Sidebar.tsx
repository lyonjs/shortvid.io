'use client';

import styles from '../../../../styles/app/components/sidebar/sidebar.module.css';
import {Nav} from './Nav';
import React, {useState} from 'react';
import {Header} from './Header';
import {Footer} from './Footer';
import {Icon} from '@iconify/react';

export const Sidebar = () => {
	const [expanded, setExpanded] = useState<boolean>(true);

	return (
		<section
			className={styles.sidebar}
			aria-expanded={expanded}
			aria-label="sidebar"
		>
			<Header expanded={expanded} />
			<Nav expanded={expanded} />
			<Footer expanded={expanded} />
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

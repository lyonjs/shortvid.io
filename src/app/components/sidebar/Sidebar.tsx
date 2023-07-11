'use client';

import styles from '../../../../styles/app/components/sidebar/sidebar.module.css';
import {Nav} from './Nav';
import React, {useState} from 'react';
import {Header} from './Header';
import {Footer} from './Footer';
import {Icon} from '@iconify/react';

export const Sidebar = () => {
	const [folded, setFolded] = useState<boolean>(false);

	return (
		<section className={styles.sidebar} aria-expanded={folded}>
			<Header folded={folded} />
			<Nav folded={folded} />
			<Footer folded={folded} />
			<button
				type="button"
				className={styles.foldButton}
				onClick={() => setFolded(!folded)}
			>
				<Icon icon="iconamoon:arrow-left-2" />
			</button>
		</section>
	);
};

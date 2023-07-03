'use client';

import styles from '../../../../styles/app/components/sidebar/sidebar.module.css';
import {Nav} from './Nav';
import React, {useState} from 'react';
import {Header} from './Header';
import {Footer} from './Footer';

export const Sidebar = () => {
	const [folded, setFolded] = useState<boolean>(true);

	return (
		<section className={styles.sidebar} data-folded={folded}>
			<Header folded={folded} />
			<Nav folded={folded} />
			<Footer folded={folded} />
			<button
				type="button"
				className={styles.foldButton}
				onClick={() => setFolded(!folded)}
			/>
		</section>
	);
};

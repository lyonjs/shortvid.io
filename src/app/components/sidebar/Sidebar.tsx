'use client';

import React, {useState} from 'react';
import {Icon} from '@iconify/react';

import {Footer} from './Footer';
import {Header} from './Header';
import {Nav} from './Nav';

import styles from '../../../../styles/app/components/sidebar/sidebar.module.css';

export const Sidebar = () => {
	const [expanded, setExpanded] = useState<boolean>(true);
	const [openBurger, setOpenBurger] = useState<boolean>(false);

	return (
		<section
			className={styles.sidebar}
			aria-expanded={expanded}
			aria-label="sidebar"
		>
			<Header expanded={expanded} setOpenBurger={setOpenBurger} />
			<div
				className={`${styles.burgerContent} ${
					openBurger ? styles.openedBurger : ''
				}`}
			>
				<button
					type="button"
					aria-label="closeBurgerBtn"
					className={styles.closeBurgerBtn}
					onClick={() => setOpenBurger(false)}
				>
					<Icon icon="entypo:cross" />
				</button>
				<Nav expanded={expanded} />
				<Footer expanded={expanded} />
			</div>
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

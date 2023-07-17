'use client';

import {useEffect, useState} from 'react';

import {Icon} from '@iconify/react';

import {Footer} from './Footer';
import {Header} from './Header';
import {Nav} from './Nav';
import styles from '../../../../styles/app/components/sidebar/sidebar.module.css';

export const SidebarMobile = () => {
	const [openBurger, setOpenBurger] = useState<boolean>(false);
	const expanded = true;

	useEffect(() => {
		document.body.toggleAttribute('data-lock-scroll', openBurger);
	}, [openBurger]);

	return (
		<section
			className={`${styles.sidebar} ${styles.sidebarMobile}`}
			aria-expanded={expanded}
			data-testid="sidebarMobile"
		>
			<Header expanded={expanded}>
				<button
					type="button"
					aria-label="openBurgerBtn"
					className={styles.openBurgerBtn}
					onClick={() => setOpenBurger(true)}
				>
					<Icon icon="entypo:menu" />
				</button>
			</Header>
			<div
				className={`${styles.burgerContent} ${
					openBurger ? styles.openedBurger : ''
				}`}
			>
				{openBurger && (
					<>
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
					</>
				)}
			</div>
		</section>
	);
};

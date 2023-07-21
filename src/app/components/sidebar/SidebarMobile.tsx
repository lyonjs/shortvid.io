'use client';

import {useEffect, useState} from 'react';

import {BurgerIcon} from './BurgerIcon';
import {Footer} from './Footer';
import {Header} from './Header';
import {Nav} from './Nav';
import styles from '../../../../styles/app/components/sidebar/sidebar.module.css';

export const SidebarMobile = () => {
	const [openBurger, setOpenBurger] = useState<boolean>(false);
	const isOpenClassName = openBurger ? styles.openedBurger : '';

	useEffect(() => {
		document.body.toggleAttribute('data-lock-scroll', openBurger);
	}, [openBurger]);

	return (
		<section
			className={`${styles.sidebar} ${styles.sidebarMobile}`}
			data-testid="sidebarMobile"
		>
			<Header expanded>
				<button
					type="button"
					aria-label="Open or close navigation"
					className={`${styles.burgerBtn} ${isOpenClassName}`}
					onClick={() => setOpenBurger(!openBurger)}
				>
					<BurgerIcon />
				</button>
			</Header>
			<div className={`${styles.burgerContent} ${isOpenClassName}`}>
				{openBurger && (
					<>
						<Nav expanded />
						<Footer expanded />
					</>
				)}
			</div>
		</section>
	);
};

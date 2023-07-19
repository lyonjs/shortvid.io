'use client';

import {useEffect, useState} from 'react';

import {Footer} from './Footer';
import {Header} from './Header';
import {Nav} from './Nav';
import styles from '../../../../styles/app/components/sidebar/sidebar.module.css';

export const SidebarMobile = () => {
	const [openBurger, setOpenBurger] = useState<boolean>(false);
	const expanded = true;
	const isOpenClassName = openBurger ? styles.openedBurger : '';

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
					aria-label="Open or close navigation"
					className={`${styles.burgerBtn} ${isOpenClassName}`}
					onClick={() => setOpenBurger(!openBurger)}
				>
					<svg viewBox="0 0 48 32" fill="none">
						<path
							d="M3 3H45"
							stroke="currentColor"
							strokeWidth="5"
							strokeLinecap="round"
						></path>
						<path
							d="M3 16H45"
							stroke="currentColor"
							strokeWidth="5"
							strokeLinecap="round"
						></path>
						<path
							d="M3 30H45"
							stroke="currentColor"
							strokeWidth="5"
							strokeLinecap="round"
						></path>
					</svg>
				</button>
			</Header>
			<div className={`${styles.burgerContent} ${isOpenClassName}`}>
				{openBurger && (
					<>
						<Nav expanded={expanded} />
						<Footer expanded={expanded} />
					</>
				)}
			</div>
		</section>
	);
};

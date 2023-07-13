'use client';

import {ReactNode} from 'react';

import {usePathname} from 'next/navigation';

import styles from '../../../../styles/app/components/sidebar/activeLink.module.css';

export const ActiveLink: React.FC<{
	src: string;
	className?: string;
	children: ReactNode;
}> = ({src, className = '', children}) => {
	const pathname = usePathname();

	const isActive = pathname === src;

	return (
		<a
			className={`${className} ${styles.activeLink} ${
				isActive ? styles.active : ''
			}`}
			href={src}
		>
			{children}
		</a>
	);
};

'use client';

import styles from '../../../../styles/app/components/sidebar/nav.module.css';
import {usePathname} from 'next/navigation';
import {ReactNode} from 'react';

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

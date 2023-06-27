'use client';

import styles from '../../../../styles/app/components/sidebar/nav.module.css';
import {usePathname} from 'next/navigation';
import {ReactNode} from 'react';
import {convertFirstLetterToLowercase} from '../../utils/convertFirstLetterToLowercase';

export const ActiveLink: React.FC<{
	linkRoute: string;
	compositionId?: string;
	formatId?: boolean;
	className?: string;
	children: ReactNode;
}> = ({
	linkRoute,
	compositionId,
	formatId = false,
	className = '',
	children,
}) => {
	const pathname = usePathname();

	const link = formatId
		? compositionId && linkRoute + convertFirstLetterToLowercase(compositionId)
		: linkRoute + compositionId;

	const isActive = compositionId ? pathname === link : pathname === linkRoute;

	return (
		<a
			className={`${className} ${styles.activeLink} ${
				isActive ? styles.active : ''
			}`}
			href={compositionId ? link : linkRoute}
		>
			<li>
				<span>{children}</span>
			</li>
		</a>
	);
};

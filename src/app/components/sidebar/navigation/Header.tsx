import {ReactNode} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../../../../styles/app/components/sidebar/sidebar.module.css';

export const Header: React.FC<{
	expanded: boolean;
	className?: string;
	children?: ReactNode;
}> = ({expanded, className, children}) => {
	return (
		<header className={className}>
			<nav>
				<Link href="/" className={styles.logoLink}>
					{expanded ? (
						<Image
							src="/branding/full-logo.svg"
							alt="Shortvid.io logo"
							width={170}
							height={150}
						/>
					) : (
						<Image
							src="/branding/monogram.svg"
							alt="Shortvid.io monogram"
							width={70}
							height={70}
						/>
					)}
				</Link>
				{children}
			</nav>
		</header>
	);
};

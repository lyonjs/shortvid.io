import {ReactNode, Suspense} from 'react';

import RootLayout from '../../src/app/RootLayout';

import '../../styles/globals.css';
import styles from '../../styles/app/layout/main.module.css';

export default function TemplatesLayout({children}: {children: ReactNode}) {
	return (
		<RootLayout>
			<div className={styles.mainContent}>
				<Suspense>{children}</Suspense>
			</div>
		</RootLayout>
	);
}

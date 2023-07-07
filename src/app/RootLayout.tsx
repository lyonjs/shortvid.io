import '../../styles/globals.css';
import {Analytics} from '@vercel/analytics/react';

import {ReactNode} from 'react';
import {FontProvider} from '../context/FontContext';
import {Footer} from './Footer';
import {CustomThemeProvider} from '../context/CustomThemeProvider';
import {Sidebar} from './components/sidebar/Sidebar';
import styles from '../../styles/app/layout/main.module.css';

export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<CustomThemeProvider>
			<main className="mx-auto p-4">
				<div className={styles.sidebarLayout}>
					<Sidebar />
					<section>
						<FontProvider>{children}</FontProvider>
					</section>
				</div>
				<Footer />
				<Analytics />
			</main>
		</CustomThemeProvider>
	);
}

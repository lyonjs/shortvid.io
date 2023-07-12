import '../../styles/globals.css';

import {ReactNode} from 'react';

import {Analytics} from '@vercel/analytics/react';

import {Sidebar} from './components/sidebar/Sidebar';
import {SidebarMobile} from './components/sidebar/SidebarMobile';
import {Footer} from './Footer';
import styles from '../../styles/app/layout/main.module.css';
import {CustomThemeProvider} from '../context/CustomThemeProvider';
import {FontProvider} from '../context/FontContext';

export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<CustomThemeProvider>
			<main className="mx-auto p-4">
				<div className={styles.sidebarLayout}>
					<Sidebar />
					<SidebarMobile />
					<section>
						<FontProvider>{children}</FontProvider>
						<Footer />
					</section>
				</div>
				<Analytics />
			</main>
		</CustomThemeProvider>
	);
}

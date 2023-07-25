import {ReactNode} from 'react';
import {Analytics} from '@vercel/analytics/react';

import {FontProvider} from '../context/FontContext';
import {SidebarProvider} from '../context/SidebarContext';

import {Sidebar} from './components/sidebar/navigation/Sidebar';
import {SidebarMobile} from './components/sidebar/navigation/SidebarMobile';
import {ResizeWrapper} from './components/sidebar/ResizeWrapper';

import '../../styles/globals.css';
import styles from '../../styles/app/layout/main.module.css';

export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<main className="mx-auto p-4">
			<div className={styles.sidebarLayout}>
				<SidebarProvider>
					<ResizeWrapper>
						<Sidebar />
					</ResizeWrapper>
					<SidebarMobile />
				</SidebarProvider>
				<section>
					<FontProvider>{children}</FontProvider>
				</section>
			</div>
			<Analytics />
		</main>
	);
}

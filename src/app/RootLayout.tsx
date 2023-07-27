import {ReactNode} from 'react';
import {Analytics} from '@vercel/analytics/react';

import {FontProvider} from '../context/FontContext';
import {SidebarProvider} from '../context/SidebarContext';

import {SidebarNav} from './components/sidebar/navigation/SidebarNav';
import {SidebarNavMobile} from './components/sidebar/navigation/SidebarNavMobile';
import {ResizeWrapper} from './components/sidebar/ResizeWrapper';
import {Sidebar} from './components/sidebar/Sidebar';

import '../../styles/globals.css';
import styles from '../../styles/app/layout/main.module.css';

export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<main className="mx-auto p-4">
			<div className={styles.sidebarLayout}>
				<SidebarProvider>
					<div className={styles.navigationSidebar}>
						<ResizeWrapper>
							<Sidebar>
								<SidebarNav />
							</Sidebar>
						</ResizeWrapper>
					</div>
					<SidebarNavMobile />
				</SidebarProvider>
				<div>
					<SidebarProvider>
						<FontProvider>{children}</FontProvider>
					</SidebarProvider>
				</div>
			</div>
			<Analytics />
		</main>
	);
}

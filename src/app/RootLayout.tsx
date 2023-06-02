'use client';
import '../../styles/globals.css';
import {Analytics} from '@vercel/analytics/react';

import {ReactNode} from 'react';
import {Header} from './Header';
import {NavBar} from './NavBar';
import {FontProvider} from '../context/FontContext';
import {Footer} from './Footer';
import {ThemeProvider} from 'next-themes';

export default function RootLayout({children}: {children: ReactNode}) {
	return (
		<ThemeProvider>
			<main className="mx-auto p-4">
				<article className="mb-3">
					<Header />
					<p>
						This application is developed and maintained by the{' '}
						<a href="https://github.com/lyonjs/shortvid.io/graphs/contributors">
							volunteer organizers
						</a>{' '}
						of the <a href="http://lyonjs.org/">Lyon JS Meetup</a>. It aims to
						facilitate the generation of video for{' '}
						<a href="https://twitter.com/lyonjs">
							the social networks of the association
						</a>
						.
					</p>

					<p className="mt-2">
						Videos can be generated through Github workflow or directly locally
						if you have installed the project.
					</p>
					<p className="mt-2">
						This project uses <a href="https://nextjs.org/">NextJS</a> and{' '}
						<a href="https://www.remotion.dev/">Remotion</a> libraries.
					</p>
				</article>
				<NavBar />
				<FontProvider>{children}</FontProvider>
				<Footer />
				<Analytics />
			</main>
		</ThemeProvider>
	);
}

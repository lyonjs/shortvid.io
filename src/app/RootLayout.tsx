import '../../styles/globals.css';
import Image from 'next/image';
import {Analytics} from '@vercel/analytics/react';

import {ReactNode} from 'react';
import {Header} from './Header';
import {NavBar} from './NavBar';

export default function RootLayout({children}: {children: ReactNode}) {
	return (
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
					Videos can be generated through Github workflow or directly locally if
					you have installed the project.
				</p>
				<p className="mt-2">
					This project uses <a href="https://nextjs.org/">NextJS</a> and{' '}
					<a href="https://www.remotion.dev/">Remotion</a> libraries.
				</p>
			</article>
			<NavBar />
			{children}
			<footer className="flex justify-between items-center my-8">
				<a
					className="block"
					href="https://vercel.com?utm_source=lyonjs&utm_campaign=oss"
				>
					<Image
						alt="Vercel"
						width="200"
						height="100"
						src="https://images.ctfassets.net/e5382hct74si/78Olo8EZRdUlcDUFQvnzG7/fa4cdb6dc04c40fceac194134788a0e2/1618983297-powered-by-vercel.svg"
					/>
				</a>
				<span className="block">Made with 💛 and JS</span>
			</footer>
			<Analytics />
		</main>
	);
}

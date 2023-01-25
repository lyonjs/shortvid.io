import Head from 'next/head';

import '../styles/globals.css';
import {LyonJSLogo} from '../src/components/LyonJSLogo';
import {ActiveLink} from '../src/components/ActiveLink';

export default ({Component, pageProps}) => {
	return (
		<main className="mx-auto p-4">
			<Head>
				<title>LyonJS - social video generator</title>
				<link rel="icon" href="/lyonjs-squared.png" />
				<meta name="title" content="LyonJS - social video generator" />
				<meta
					name="description"
					content="This application is developed and maintained by the volunteer organizers of the Lyon JS Meetup. It aims to facilitate the generation of video for the social networks of the association."
				/>

				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://social-video-generator.vercel.app/"
				/>
				<meta property="og:title" content="LyonJS - social video generator" />
				<meta
					property="og:description"
					content="This application is developed and maintained by the volunteer organizers of the Lyon JS Meetup. It aims to facilitate the generation of video for the social networks of the association."
				/>
				<meta
					property="og:image"
					content="https://social-video-generator.vercel.app/screenshot.png"
				/>

				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://social-video-generator.vercel.app/"
				/>
				<meta
					property="twitter:title"
					content="LyonJS - social video generator"
				/>
				<meta
					property="twitter:description"
					content="This application is developed and maintained by the volunteer organizers of the Lyon JS Meetup. It aims to facilitate the generation of video for the social networks of the association."
				/>
				<meta
					property="twitter:image"
					content="https://social-video-generator.vercel.app/screenshot.png"
				/>
			</Head>
			<article className="mb-3">
				<header className="flex items-center my-9">
					<LyonJSLogo style={{height: '60px', display: 'block'}} />
					<h1 className="text-2xl md:text-3xl ml-5">Social video generator</h1>
					<a
						className="ml-auto border-2 px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all duration-200 font-bold"
						href="https://github.com/lyonjs/social-video-generator"
					>
						👨🏼‍💻 Repository
					</a>
				</header>
				<p>
					This application is developed and maintained by the{' '}
					<a href="https://github.com/lyonjs/social-video-generator/graphs/contributors">
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

			<nav>
				<ul className="flex flex-col justify-between md:flex-row py-5 pb-9">
					<ActiveLink href="/">
						<li className="text-black py-2 px-4 bg-white rounded-lg cursor-pointer font-bold shadow-yellow-300 hover:scale-105">
							<span>🏠 Home</span>
						</li>
					</ActiveLink>
					<ActiveLink href="/meetup">
						<li className="text-black mt-2 md:mt-0 md:ml-5 py-2 px-4 bg-white rounded-lg cursor-pointer font-bold shadow-yellow-300 hover:scale-105">
							<span>🗓 Meetup</span>
						</li>
					</ActiveLink>
					<ActiveLink href="/talk">
						<li className="text-black mt-2 md:mt-0 md:ml-5 py-2 px-4 bg-white rounded-lg cursor-pointer font-bold shadow-yellow-300 hover:scale-105">
							<span>🎤 Talk</span>
						</li>
					</ActiveLink>
					<ActiveLink href="/sponsor">
						<li className="text-black mt-2 md:mt-0 md:ml-5 py-2 px-4 bg-white rounded-lg cursor-pointer font-bold shadow-yellow-300 hover:scale-105">
							<span>🍕 Sponsor</span>
						</li>
					</ActiveLink>
					<ActiveLink href="/event">
						<li className="text-black mt-2 md:mt-0 md:ml-5 py-2 px-4 bg-white rounded-lg cursor-pointer font-bold shadow-yellow-300 hover:scale-105">
							<span>🎉 Event</span>
						</li>
					</ActiveLink>
					<ActiveLink href="/conference">
						<li className="text-black mt-2 md:mt-0 md:ml-5 py-2 px-4 bg-white rounded-lg cursor-pointer font-bold shadow-yellow-300 hover:scale-105">
							<span>Conference</span>
						</li>
					</ActiveLink>
				</ul>
			</nav>
			<Component {...pageProps} />
			<footer className="mt-6 text-right">Made with 💛 and JS</footer>
		</main>
	);
};

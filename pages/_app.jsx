import Link from 'next/link';
import {useRouter} from 'next/router';
import Head from 'next/head';

import './app.css';
import {LyonJSLogo} from '../src/components/LyonJSLogo';

export default ({Component, pageProps}) => {
	const router = useRouter();

	return (
		<main>
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
			<article className="chapo">
				<header>
					<LyonJSLogo style={{height: '40px', display: 'block'}} />
					<h1>LyonJS - Social video preview generator</h1>
				</header>
				<p>
					This application allow you to preview videos directly in the browser
					before generating them with github action workflows.
				</p>
			</article>

			<nav>
				<ul>
					<Link href="/">
						<li className={router.asPath === '/' ? 'active' : null}>
							<a>Meetup announce generator</a>
						</li>
					</Link>
					<Link href="/talk">
						<li className={router.asPath === '/talk' ? 'active' : null}>
							<a>Talk subject generator</a>
						</li>
					</Link>
					<Link href="/sponsor">
						<li className={router.asPath === '/sponsor' ? 'active' : null}>
							<a>Sponsor video generator</a>
						</li>
					</Link>
				</ul>
			</nav>
			<Component {...pageProps} />
		</main>
	);
};

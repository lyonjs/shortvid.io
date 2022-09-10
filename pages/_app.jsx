import Link from 'next/link';
import {useRouter} from 'next/router';

import './app.css';
import {LyonJSLogo} from '../src/components/LyonJSLogo';

export default ({Component, pageProps}) => {
	const router = useRouter();

	return (
		<main>
			<article className="chapo">
				<header>
					<LyonJSLogo style={{height: '40px', display: 'block'}} />
					<h1>LyonJS - Social video preview generator</h1>
					<a
						className="github"
						href="https://github.com/lyonjs/social-video-generator"
					>
						Repository
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
				<p>
					Videos can be generated through Github workflow or directly locally if
					you have installed the project.
				</p>
				<p>
					This project uses <a href="https://nextjs.org/">NextJS</a> and{' '}
					<a href="https://www.remotion.dev/">Remotion</a> libraries.
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

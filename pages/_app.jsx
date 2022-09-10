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
			<footer>Made with ❤️ and JS</footer>
		</main>
	);
};

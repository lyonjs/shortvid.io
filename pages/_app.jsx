import Link from 'next/link';

import './app.css';
import {LyonJSLogo} from '../src/components/LyonJSLogo';

export default ({Component, pageProps}) => {
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
					<li>
						<Link href="/">
							<a>Meetup announce video generation</a>
						</Link>
					</li>
					<li>
						<Link href="/talk">
							<a>Talk subject video generation</a>
						</Link>
					</li>
					<li>
						<Link href="/sponsor">
							<a>Sponsor video generation</a>
						</Link>
					</li>
				</ul>
			</nav>
			<Component {...pageProps} />
		</main>
	);
};

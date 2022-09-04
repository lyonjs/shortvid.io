import Link from 'next/link';

export default function MyApp({Component, pageProps}) {
	return (
		<main>
			<h1>Social video preview generator</h1>
			<p>
				This application allow you to preview videos directly in the browser
				before generating them with github action workflows.
			</p>
			<ul>
				<li>
					<Link href="/meetup">
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
			<Component {...pageProps} />
		</main>
	);
}

import Image from 'next/image';

import {Card} from './Card';
import {ListBloc} from './ListBloc';

import styles from '../../../../styles/app/layout/landing/parterAndSponsors.module.css';

const sponsors = [
	{
		name: 'Vercel',
		logo: '/images/app/sponsors/vercelLogo.svg',
		url: 'https://vercel.com/home',
	},
	{
		name: 'Clever Cloud',
		logo: '/images/app/sponsors/cleverCloudLogo.svg',
		url: 'https://www.clever-cloud.com/',
	},
];

export const Sponsors = () => {
	return (
		<ListBloc sectionTitle="Our Sponsors">
			{sponsors.map(({name, logo, url}) => (
				<a key={name} href={url} target="_blank">
					<Card filled>
						<Image
							className={styles.sponsorLogos}
							width={300}
							height={300}
							src={logo}
							alt={name}
						/>
					</Card>
				</a>
			))}
		</ListBloc>
	);
};

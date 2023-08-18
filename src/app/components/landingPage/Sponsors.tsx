import Image from 'next/image';
import Link from 'next/link';

import {sponsors} from '../../../data/config/landingPageConfig';

import {Card} from './Card';
import {ListBloc} from './ListBloc';

import styles from '../../../../styles/app/layout/landing/parterAndSponsors.module.css';

export const Sponsors = () => {
	return (
		<ListBloc sectionTitle="Our Sponsors">
			{sponsors.map(({name, logo, url}) => (
				<Link key={name} href={url} target="_blank">
					<Card filled>
						<Image
							className={styles.sponsorLogos}
							width={300}
							height={300}
							src={logo}
							alt={name}
						/>
					</Card>
				</Link>
			))}
		</ListBloc>
	);
};

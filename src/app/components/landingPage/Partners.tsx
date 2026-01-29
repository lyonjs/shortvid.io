import Image from 'next/image';
import Link from 'next/link';

import {PARTNERS} from '../../../data/config/landingPageConfig';

import {Card} from './Card';
import {ListBloc} from './ListBloc';

import styles from '../../../../styles/app/layout/landing/parterAndSponsors.module.css';

export const Partners = () => {
	return (
		<ListBloc sectionTitle="They trust us">
			{PARTNERS.map(({name, logoDark, url}) => (
				<Link key={name} href={url} target="_blank">
					<Card>
						<div className={styles.logos}>
							<Image
								className={styles.sponsorLogos}
								width={300}
								height={300}
								src={logoDark}
								alt={name}
							/>
						</div>
					</Card>
				</Link>
			))}
		</ListBloc>
	);
};

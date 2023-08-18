import Image from 'next/image';
import Link from 'next/link';

import {SPONSORS} from '../../../data/config/landingPageConfig';
import {useSelectedTheme} from '../../hooks/useSelectedTheme';

import {Card} from './Card';
import {ListBloc} from './ListBloc';

import styles from '../../../../styles/app/layout/landing/parterAndSponsors.module.css';

export const Sponsors = () => {
	const {themeName} = useSelectedTheme();

	return (
		<ListBloc sectionTitle="Our Sponsors">
			{SPONSORS.map(({name, logo, logoDark, url}) => (
				<Link key={name} href={url} target="_blank">
					<Card>
						<div className={styles.logos}>
							<Image
								className={styles.sponsorLogos}
								width={300}
								height={300}
								src={themeName == 'dark' ? logoDark : logo}
								alt={name}
							/>
						</div>
					</Card>
				</Link>
			))}
		</ListBloc>
	);
};

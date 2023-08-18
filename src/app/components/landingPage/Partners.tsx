import Image from 'next/image';
import Link from 'next/link';

import {PARTNERS} from '../../../data/config/landingPageConfig';
import {useSelectedTheme} from '../../hooks/useSelectedTheme';

import {Card} from './Card';
import {ListBloc} from './ListBloc';

import styles from '../../../../styles/app/layout/landing/parterAndSponsors.module.css';

export const Partners = () => {
	const {themeName} = useSelectedTheme();

	return (
		<ListBloc sectionTitle="They worked with us">
			{PARTNERS.map(({name, logo, logoDark, url}) => (
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

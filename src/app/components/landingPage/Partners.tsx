import Image from 'next/image';

import {partners} from '../../../data/config/landingPageConfig';

import {Card} from './Card';
import {ListBloc} from './ListBloc';

import styles from '../../../../styles/app/layout/landing/parterAndSponsors.module.css';

export const Partners = () => {
	return (
		<ListBloc sectionTitle="They worked with us">
			{partners.map(({name, logo, url}) => (
				<a key={name} href={url} target="_blank">
					<Card>
						<div className={styles.logos}>
							<Image width={300} height={300} src={logo} alt={name} />
						</div>
					</Card>
				</a>
			))}
		</ListBloc>
	);
};

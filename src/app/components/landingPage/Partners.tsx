import Image from 'next/image';

import {Card} from './Card';
import {ListBloc} from './ListBloc';

import styles from '../../../../styles/app/layout/landing/parterAndSponsors.module.css';

const partners = [
	{
		name: 'Touraine Tech',
		logo: '/images/showcases/touraineTech/touraineTechLogo.svg',
		url: 'https://touraine.tech/',
	},
	{
		name: 'Mixit',
		logo: '/images/showcases/mixit/mixitLogo2023.svg',
		url: 'https://mixitconf.org/',
	},
	{
		name: 'Camping des Speakers',
		logo: '/images/showcases/campingDesSpeakers/campingDesSpeakersLogo.png',
		url: 'https://camping-speakers.fr/',
	},
	{
		name: 'Volcamp',
		logo: '/images/showcases/volcamp/volcampText.svg',
		url: 'https://www.volcamp.io/',
	},
];

export const Partners = () => {
	return (
		<ListBloc sectionTitle="They worked with us">
			{partners.map(({name, logo, url}) => (
				<a key={name} href={url} target="_blank">
					<Card filled>
						<div className={styles.logos}>
							<Image width={300} height={300} src={logo} alt={name} />
						</div>
					</Card>
				</a>
			))}
		</ListBloc>
	);
};

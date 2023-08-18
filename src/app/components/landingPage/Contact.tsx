import {Icon} from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import {staticFile} from 'remotion';

import {Card} from './Card';
import {ListBloc} from './ListBloc';

import styles from '../../../../styles/app/layout/landing/contact.module.css';

const CONTACTS = [
	{
		name: 'Antoine Carron',
		twitter: 'Slashgear_',
		pictureUrl: staticFile('/images/app/contact/antoine-carron.jpeg'),
	},
	{
		name: 'Mickael Alves',
		twitter: 'CruuzAzul',
		pictureUrl: staticFile('/images/app/contact/mickael-alves.jpeg'),
	},
];

export const Contact = () => {
	return (
		<ListBloc sectionTitle="Contact us">
			{CONTACTS.map(({name, twitter, pictureUrl}) => (
				<Link key={name} href={`https://twitter.com/${twitter}`}>
					<Card>
						<div className={styles.contact}>
							<Image src={pictureUrl} alt={name} width={150} height={150} />
							<div>
								<h4>{name}</h4>
								<span className={styles.twitter}>
									<Icon icon="mdi:twitter" />@{twitter}
								</span>
							</div>
						</div>
					</Card>
				</Link>
			))}
		</ListBloc>
	);
};

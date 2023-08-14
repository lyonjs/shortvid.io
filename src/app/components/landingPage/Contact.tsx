import Image from 'next/image';

import {IconWithCaption} from '../../../../remotion/design/molecules/IconWithCaption';

import styles from '../../../../styles/app/layout/landing/contact.module.css';
import landingStyle from '../../../../styles/app/layout/landing/landing.module.css';

const contacts = [
	{
		name: 'Antoine Carron',
		twitter: 'Slashgear_',
		pictureUrl:
			'https://pbs.twimg.com/profile_images/1633242263860965376/iw95gEVA_400x400.jpg',
	},
	{
		name: 'Mickael Alves',
		twitter: 'CruuzAzul',
		pictureUrl:
			'https://pbs.twimg.com/profile_images/1635742650090283013/9qflRryB_400x400.jpg',
	},
];

export const Contact = () => {
	return (
		<section className={styles.contactContainer}>
			<h3>Contact Us</h3>

			<div className={styles.list}>
				{contacts.map(({name, twitter, pictureUrl}) => (
					<div key={name} className={`${landingStyle.card} ${styles.contact}`}>
						<Image src={pictureUrl} alt={name} width={150} height={150} />
						<div>
							<h4>{name}</h4>
							<a href={`https://twitter.com/${twitter}`}>
								<IconWithCaption iconifyId="mdi:twitter" caption={twitter} />
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

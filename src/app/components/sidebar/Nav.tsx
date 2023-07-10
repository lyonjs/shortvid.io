'use client';

import styles from '../../../../styles/app/components/sidebar/nav.module.css';
import {
	CompositionType,
	sideBarNavConfig,
} from '../../../data/config/sideBarConfig';
import {ActiveLink} from './ActiveLink';
import {Icon} from '@iconify/react';
import {NavDetails} from './NavDetails';
import {useState} from 'react';

export const Nav: React.FC<{folded: boolean}> = ({folded}) => {
	const [openedNavDetails, setOpenedNavDetails] = useState<string | null>(null);

	return (
		<nav className={styles.sideBarNav}>
			<ul>
				<li className={styles.topLevel}>
					<ActiveLink src="/">
						<span>
							<Icon icon="majesticons:home-line" />
							{!folded && 'Home'}
						</span>
					</ActiveLink>
				</li>
				{Object.entries(sideBarNavConfig).map(([videoType, videoList]) => {
					const compositionType = videoType as CompositionType;

					return (
						<li key={videoType} className={styles.topLevel}>
							<NavDetails
								videoType={compositionType}
								videoList={videoList}
								folded={folded}
								openedNavDetails={openedNavDetails}
								setOpenedNavDetails={setOpenedNavDetails}
							/>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

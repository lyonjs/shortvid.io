'use client';

import styles from '../../../../styles/app/components/sidebar/nav.module.css';
import {
	CompositionType,
	sideBarNavConfig,
} from '../../../data/config/sideBarConfig';
import {ActiveLink} from './ActiveLink';
import {NavDetails} from './NavDetails';
import {useState} from 'react';
import {TopLevelContent} from './TopLevelContent';

export const Nav: React.FC<{folded: boolean}> = ({folded}) => {
	const [openedNavDetails, setOpenedNavDetails] = useState<string | null>(null);

	return (
		<nav className={styles.sideBarNav}>
			<ul>
				<li className={styles.topLevel}>
					<ActiveLink src="/">
						<span>
							<TopLevelContent
								folded={folded}
								iconifyId="majesticons:home-line"
								textContent="Home"
							/>
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

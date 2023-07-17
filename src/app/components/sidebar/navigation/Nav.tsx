'use client';

import {useState} from 'react';

import {NavDetails} from './NavDetails';
import styles from '../../../../../styles/app/components/sidebar/nav.module.css';
import {
	CompositionType,
	sideBarNavConfig,
} from '../../../../data/config/sideBarConfig';
import {ActiveLink} from '../ActiveLink';
import {TopLevelContent} from '../TopLevelContent';

export const Nav: React.FC<{expanded: boolean}> = ({expanded}) => {
	const [openedNavDetails, setOpenedNavDetails] = useState<string | null>(null);

	return (
		<nav className={styles.sideBarNav}>
			<ul>
				<li className={styles.topLevel}>
					<ActiveLink src="/">
						<span>
							<TopLevelContent
								expanded={expanded}
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
								expanded={expanded}
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

'use client';

import styles from '../../../../styles/app/components/sidebar/nav.module.css';
import {sideBarNavConfig} from '../../../data/sideBarConfig';
import {ActiveLink} from './ActiveLink';
import {CategoryLink} from './CategoryLink';
import {Icon} from '@iconify/react';
import {usePathname} from 'next/navigation';
import {CompositionLink} from './compositionLink';
export const Nav = () => {
	const pathname = usePathname();

	return (
		<nav className={styles.sideBarNav}>
			<ul>
				<ActiveLink src="/" className={styles.topLevel}>
					<span>
						<Icon icon="majesticons:home-line" /> Home
					</span>
				</ActiveLink>
				{Object.entries(sideBarNavConfig).map(([videoType, videoList]) => {
					return (
						<li key={videoType} className={styles.topLevel}>
							<details open={pathname.includes(videoType)}>
								<summary>
									<Icon icon={videoList.iconifyId} /> {videoType}
								</summary>
								<ul>
									{videoList.items.map((videoParams) => {
										if ('items' in videoParams) {
											return (
												<CategoryLink
													key={videoParams.categoryName}
													categoryRoute={`${videoList.route}${videoParams.categoryName}/`}
													categoryName={videoParams.categoryName}
													items={videoParams.items}
												/>
											);
										}

										return (
											<ActiveLink
												key={videoParams.compositionId}
												src={videoList.route + videoParams.compositionLink}
											>
												<CompositionLink
													compositionName={videoParams.compositionName}
												/>
											</ActiveLink>
										);
									})}
								</ul>
							</details>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

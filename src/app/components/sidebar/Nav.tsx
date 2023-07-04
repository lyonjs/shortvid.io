'use client';

import styles from '../../../../styles/app/components/sidebar/nav.module.css';
import {CompositionType, sideBarNavConfig} from '../../../data/sideBarConfig';
import {ActiveLink} from './ActiveLink';
import {CategoryLink} from './CategoryLink';
import {Icon} from '@iconify/react';
import {usePathname} from 'next/navigation';
import {CompositionThumbnail} from './CompositionThumbnail';

export const Nav = () => {
	const pathname = usePathname();

	return (
		<nav className={styles.sideBarNav}>
			<ul>
				<li className={styles.topLevel}>
					<ActiveLink src="/">
						<span>
							<Icon icon="majesticons:home-line" /> Home
						</span>
					</ActiveLink>
				</li>
				{Object.entries(sideBarNavConfig).map(([videoType, videoList]) => {
					const compositionType = videoType as CompositionType;
					const isOpen = pathname.includes(videoType);

					return (
						<li key={videoType} className={styles.topLevel}>
							<details open={isOpen}>
								<summary>
									<div>
										<Icon icon={videoList.iconifyId} /> {videoType}
									</div>
									<Icon icon="iconamoon:arrow-down-2" />
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
													compositionType={compositionType}
												/>
											);
										}

										return (
											<ActiveLink
												key={videoParams.compositionId}
												src={videoList.route + videoParams.compositionLink}
											>
												<CompositionThumbnail
													compositionType={compositionType}
													compositionId={videoParams.compositionId}
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

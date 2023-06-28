'use client';

import styles from '../../../../styles/app/components/sidebar/nav.module.css';
import {sideBarNavConfig} from '../../../data/sideBarConfig';
import {ActiveLink} from './ActiveLink';
import {CategoryLink} from './CategoryLink';
import {Icon} from '@iconify/react';
import {usePathname} from 'next/navigation';
export const Nav = () => {
	const pathname = usePathname();

	return (
		<nav className={styles.sideBarNav}>
			<ul>
				<ActiveLink linkRoute="/" className={styles.lopLevel}>
					<>
						<Icon icon="majesticons:home-line" /> Home
					</>
				</ActiveLink>
				{Object.entries(sideBarNavConfig).map(
					([typeOfVideo, videoList], index) => {
						const formatId = typeOfVideo === 'templates';

						return (
							<li key={index} className={styles.lopLevel}>
								<details open={pathname.includes(typeOfVideo)}>
									<summary>
										<Icon icon={videoList.iconifyId} /> {typeOfVideo}
									</summary>
									<ul>
										{videoList.items.map((videoParams, index) => {
											if ('items' in videoParams) {
												return (
													<CategoryLink
														key={index}
														categoryRoute={videoList.route}
														categoryName={videoParams.categoryName}
														items={videoParams.items}
														formatId={formatId}
													/>
												);
											}

											return (
												<ActiveLink
													key={index}
													linkRoute={videoList.route}
													compositionId={videoParams.compositionId}
													formatId={formatId}
												>
													{videoParams.compositionName}
												</ActiveLink>
											);
										})}
									</ul>
								</details>
							</li>
						);
					}
				)}
			</ul>
		</nav>
	);
};

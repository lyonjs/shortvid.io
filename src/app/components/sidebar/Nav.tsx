'use client';

import styles from '../../../../styles/app/components/sidebar/nav.module.css';
import {sideBarConfig} from '../../../data/sideBarConfig';
import {ActiveLink} from './ActiveLink';
import {CategoryLink} from './CategoryLink';
import {Icon} from '@iconify/react';

export const Nav = () => {
	return (
		<nav className={styles.sideBarNav}>
			<ul>
				<ActiveLink linkRoute="/" className={styles.lopLevel}>
					<>
						<Icon icon="majesticons:home-line" /> Home
					</>
				</ActiveLink>
				<li className={styles.lopLevel}>
					<details>
						<summary>
							<Icon icon="ic:round-slow-motion-video" /> Templates
						</summary>
						<ul>
							{sideBarConfig.templates.map((template, index) => {
								if ('items' in template) {
									return (
										<CategoryLink
											key={index}
											categoryRoute="/templates/"
											categoryName={template.categoryName}
											items={template.items}
											formatId={true}
										/>
									);
								}

								return (
									<ActiveLink
										key={index}
										linkRoute="/templates/"
										compositionId={template.compositionId}
										formatId={true}
									>
										{template.compositionName}
									</ActiveLink>
								);
							})}
						</ul>
					</details>
				</li>
				<li className={styles.lopLevel}>
					<details>
						<summary>
							<Icon icon="ph:video" /> Showcases
						</summary>
						<ul>
							{sideBarConfig.showcases.map((showcase, index) => {
								return (
									<ActiveLink
										key={index}
										linkRoute="/showcases/conferences/"
										compositionId={showcase.compositionId}
									>
										{showcase.compositionName}
									</ActiveLink>
								);
							})}
						</ul>
					</details>
				</li>
			</ul>
		</nav>
	);
};

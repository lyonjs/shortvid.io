'use client';

import styles from '../../../../styles/app/components/sidebar/nav.module.css';
import {sideBarConfig} from '../../../data/sideBarConfig';
import {CategoryLink, VideoLink} from './Links';
import {usePathname} from 'next/navigation';
import {Icon} from '@iconify/react';

export const Nav = () => {
	const pathname = usePathname();

	return (
		<nav className={styles.sideBarNav}>
			<ul>
				<a
					className={`${styles.topLevelLink} ${
						pathname === '/' ? styles.active : ''
					}`}
					href="/"
				>
					<li>
						<span>
							<Icon icon="majesticons:home-line" /> Home
						</span>
					</li>
				</a>
				<li className={styles.topLevelLink}>
					<span>
						<Icon icon="ic:round-slow-motion-video" /> Templates
					</span>
					<ul className={styles.list}>
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
								<VideoLink
									key={index}
									linkRoute="/templates/"
									compositionId={template.compositionId}
									compositionName={template.compositionName}
									formatId={true}
								/>
							);
						})}
					</ul>
				</li>
				<li className={styles.topLevelLink}>
					<span>
						<Icon icon="ph:video" /> Showcases
					</span>
					<ul className={styles.list}>
						{sideBarConfig.showcases.map((showcase, index) => {
							return (
								<VideoLink
									key={index}
									linkRoute="/showcases/conferences/"
									compositionId={showcase.compositionId}
									compositionName={showcase.compositionName}
								/>
							);
						})}
					</ul>
				</li>
			</ul>
		</nav>
	);
};

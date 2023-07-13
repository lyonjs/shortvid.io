'use client';

import {Icon} from '@iconify/react';
import {usePathname} from 'next/navigation';

import {ActiveLink} from './ActiveLink';
import {CompositionThumbnail} from './CompositionThumbnail';
import styles from '../../../../styles/app/components/sidebar/nav.module.css';
import {
	categoryProps,
	CompositionType,
} from '../../../data/config/sideBarConfig';

export const CategoryLink: React.FC<
	categoryProps & {
		categoryRoute: string;
		compositionType: CompositionType;
	}
> = ({categoryName, items, categoryRoute, compositionType}) => {
	const pathname = usePathname();
	const isOpen = pathname.includes(categoryName);

	return (
		<details className={styles.category} open={isOpen}>
			<summary className={isOpen ? styles.selected : ''}>
				{categoryName}
				<Icon icon="iconamoon:arrow-down-2" />
			</summary>
			<ul>
				{items.map((video) => {
					return (
						<ActiveLink
							key={video.compositionId}
							src={categoryRoute + video.compositionLink}
						>
							<CompositionThumbnail
								compositionType={compositionType}
								compositionId={video.compositionId}
								compositionName={video.compositionName}
							/>
						</ActiveLink>
					);
				})}
			</ul>
		</details>
	);
};

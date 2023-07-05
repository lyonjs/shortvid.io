'use client';

import styles from '../../../../styles/app/components/sidebar/nav.module.css';
import {categoryProps} from '../../../data/sideBarConfig';
import {ActiveLink} from './ActiveLink';
import {usePathname} from 'next/navigation';
import {CompositionLink} from './compositionLink';
import {Icon} from '@iconify/react';

export const CategoryLink: React.FC<
	categoryProps & {
		categoryRoute: string;
	}
> = ({categoryName, items, categoryRoute}) => {
	const pathname = usePathname();
	const isOpen = pathname.includes(categoryName);

	return (
		<details className={styles.category} open={isOpen}>
			<summary>
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
							<CompositionLink compositionName={video.compositionName} />
						</ActiveLink>
					);
				})}
			</ul>
		</details>
	);
};

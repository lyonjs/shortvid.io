'use client';

import styles from '../../../../styles/app/components/sidebar/nav.module.css';
import {categoryProps} from '../../../data/sideBarConfig';
import {ActiveLink} from './ActiveLink';

export const CategoryLink: React.FC<
	categoryProps & {
		categoryRoute: string;
		formatId?: boolean;
	}
> = ({categoryName, items, categoryRoute, formatId = false}) => {
	return (
		<details className={styles.category}>
			<summary>{categoryName}</summary>
			<ul>
				{items.map((category, index) => {
					return (
						<ActiveLink
							key={index}
							linkRoute={categoryRoute}
							compositionId={category.compositionId}
							formatId={formatId}
						>
							{category.compositionName}
						</ActiveLink>
					);
				})}
			</ul>
		</details>
	);
};

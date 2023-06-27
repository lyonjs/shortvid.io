'use client';

import styles from '../../../../styles/app/components/sidebar/nav.module.css';
import {categoryProps} from '../../../data/sideBarConfig';
import {ActiveLink} from './ActiveLink';
import {convertFirstLetterToLowercase} from '../../utils/convertFirstLetterToLowercase';
import {usePathname} from 'next/navigation';

export const CategoryLink: React.FC<
	categoryProps & {
		categoryRoute: string;
		formatId?: boolean;
	}
> = ({categoryName, items, categoryRoute, formatId = false}) => {
	const pathname = usePathname();
	const categoryPath = convertFirstLetterToLowercase(categoryName);

	const unfold = pathname.includes(categoryPath);

	return (
		<details className={styles.category} open={unfold}>
			<summary>{categoryName}</summary>
			<ul>
				{items.map((category, index) => {
					return (
						<ActiveLink
							key={index}
							linkRoute={categoryRoute + categoryPath + '/'}
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

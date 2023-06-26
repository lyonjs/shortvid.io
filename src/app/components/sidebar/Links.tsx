'use client';

import styles from '../../../../styles/app/components/sidebar/nav.module.css';
import {categoryProps} from '../../../data/sideBarConfig';
import {usePathname} from 'next/navigation';

export const VideoLink: React.FC<{
	linkRoute: string;
	compositionId: string;
	compositionName: string;
	formatId?: boolean;
}> = ({linkRoute, compositionId, compositionName, formatId = false}) => {
	const pathname = usePathname();

	const convertFirstLetterToLowercase = (str: string): string => {
		return str.charAt(0).toLowerCase() + str.slice(1);
	};

	const link = formatId
		? linkRoute + convertFirstLetterToLowercase(compositionId)
		: linkRoute + compositionId;

	const isActive = pathname === link;

	return (
		<a
			className={`${styles.videoLink} ${isActive ? styles.active : ''}`}
			href={link}
		>
			<li>
				<span>{compositionName}</span>
			</li>
		</a>
	);
};

export const CategoryLink: React.FC<
	categoryProps & {categoryRoute: string; formatId?: boolean}
> = ({categoryName, items, categoryRoute, formatId = false}) => {
	return (
		<ul className={styles.category}>
			<li>{categoryName} -</li>
			<ul>
				{items.map((category, index) => {
					return (
						<VideoLink
							key={index}
							linkRoute={categoryRoute}
							compositionId={category.compositionId}
							formatId={formatId}
							compositionName={category.compositionName}
						/>
					);
				})}
			</ul>
		</ul>
	);
};

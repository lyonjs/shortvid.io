'use client';

import styles from '../../../../styles/app/components/sidebar/nav.module.css';
import {Icon} from '@iconify/react';
import {CategoryLink} from './CategoryLink';
import {ActiveLink} from './ActiveLink';
import {CompositionThumbnail} from './CompositionThumbnail';
import {usePathname} from 'next/navigation';
import {
	categoryProps,
	CompositionType,
	videoProps,
} from '../../../data/config/sideBarConfig';
import {useEffect, useState} from 'react';

export const NavDetails: React.FC<{
	videoType: CompositionType;
	videoList: {
		iconifyId: string;
		route: string;
		items: (categoryProps | videoProps)[];
	};
	folded: boolean;
	openedNavDetails: string | null;
	setOpenedNavDetails: (value: string | null) => void;
}> = ({
	videoType,
	folded,
	videoList,
	openedNavDetails,
	setOpenedNavDetails,
}) => {
	const pathname = usePathname();
	const isSelected = pathname.includes(videoType);
	const [open, setOpen] = useState<boolean>(isSelected);

	useEffect(() => {
		if (folded) {
			if (openedNavDetails === videoType) {
				setOpen(true);
			} else {
				setOpen(false);
			}
		}
	}, [folded, openedNavDetails]);

	useEffect(() => {
		if (folded) {
			setOpen(false);
			setOpenedNavDetails(null);
		}
	}, [folded, setOpen]);

	const handleClick = () => {
		setOpenedNavDetails(videoType);
	};

	const handleToggle = () => {
		if (!folded) {
			setOpen(true);
			setOpenedNavDetails(videoType);
		}
	};

	return (
		<details open={open} onClick={handleClick} onToggle={handleToggle}>
			<summary className={isSelected ? styles.selected : ''}>
				<div>
					<Icon icon={videoList.iconifyId} />
					{!folded && videoType}
				</div>
				{!folded && <Icon icon="iconamoon:arrow-down-2" />}
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
								compositionType={videoType}
							/>
						);
					}

					return (
						<ActiveLink
							key={videoParams.compositionId}
							src={videoList.route + videoParams.compositionLink}
						>
							<CompositionThumbnail
								compositionType={videoType}
								compositionId={videoParams.compositionId}
								compositionName={videoParams.compositionName}
							/>
						</ActiveLink>
					);
				})}
			</ul>
		</details>
	);
};

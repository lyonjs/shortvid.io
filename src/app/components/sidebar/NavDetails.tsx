'use client';

import {useEffect, useState} from 'react';
import {Icon} from '@iconify/react';
import {usePathname} from 'next/navigation';

import {
	categoryProps,
	CompositionType,
	videoProps,
} from '../../../data/config/sideBarConfig';

import {ActiveLink} from './ActiveLink';
import {CategoryLink} from './CategoryLink';
import {CompositionThumbnail} from './CompositionThumbnail';
import {TopLevelContent} from './TopLevelContent';

import styles from '../../../../styles/app/components/sidebar/nav.module.css';

type NavDetailsProps = {
	videoType: CompositionType;
	videoList: {
		iconifyId: string;
		route: string;
		items: (categoryProps | videoProps)[];
	};
	expanded: boolean;
	openedNavDetails: string | null;
	setOpenedNavDetails: (value: string | null) => void;
};

export const NavDetails: React.FC<NavDetailsProps> = ({
	videoType,
	expanded,
	videoList,
	openedNavDetails,
	setOpenedNavDetails,
}) => {
	const pathname = usePathname();
	const isSelected = pathname.includes(videoType);
	const [open, setOpen] = useState<boolean>(isSelected);

	useEffect(() => {
		if (!expanded) {
			if (openedNavDetails === videoType) {
				setOpen(true);
			} else {
				setOpen(false);
			}
		}
	}, [expanded, openedNavDetails]);

	useEffect(() => {
		if (!expanded) {
			setOpen(false);
			setOpenedNavDetails(null);
		}
	}, [expanded, setOpen]);

	const handleClick = () => {
		setOpenedNavDetails(videoType);
	};

	const handleToggle = () => {
		if (expanded) {
			setOpen(true);
			setOpenedNavDetails(videoType);
		}
	};

	return (
		<details open={open} onClick={handleClick} onToggle={handleToggle}>
			<summary className={isSelected ? styles.selected : ''}>
				<div>
					<TopLevelContent
						expanded={expanded}
						iconifyId={videoList.iconifyId}
						textContent={videoType}
					/>
				</div>
				{expanded && <Icon icon="iconamoon:arrow-down-2" />}
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

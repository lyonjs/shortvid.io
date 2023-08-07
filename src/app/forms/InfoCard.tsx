import {Icon} from '@iconify/react';

import styles from '../../../styles/app/common/infoCard.module.css';

type InfoCardType = {
	infoStatus: 'success' | 'error' | 'loading';
	textContent: string;
	iconId?: string;
	children?: React.ReactNode;
};

export const InfoCard: React.FC<InfoCardType> = ({
	infoStatus,
	textContent,
	iconId,
	children,
}) => {
	return (
		<div className={`${styles.infosCard} ${styles[infoStatus]}`}>
			<span>
				{iconId && <Icon className={styles.statusIcon} icon={iconId} />}
				{textContent}
			</span>
			{children}
		</div>
	);
};

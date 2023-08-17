import styles from '../../../../styles/app/common/card.module.css';

export const Card: React.FC<{children?: React.ReactNode; filled?: boolean}> = ({
	children,
	filled,
}) => {
	return (
		<div className={`${styles.card} ${filled ? styles.filled : ''}`}>
			<span className={styles.border} />
			{children}
		</div>
	);
};

import styles from '../../../../styles/app/common/card.module.css';

export const Card: React.FC<{children?: React.ReactNode}> = ({children}) => {
	return (
		<div className={styles.card}>
			<span className={styles.border} />
			{children}
		</div>
	);
};

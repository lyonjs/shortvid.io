import styles from '../../../../styles/app/layout/landing/listBloc.module.css';

export const ListBloc: React.FC<{
	children: React.ReactNode;
	sectionTitle: string;
}> = ({children, sectionTitle}) => {
	return (
		<section className={styles.listContainer}>
			<h3>{sectionTitle}</h3>

			<div className={styles.list}>{children}</div>
		</section>
	);
};

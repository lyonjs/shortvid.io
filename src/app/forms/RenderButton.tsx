import {Icon} from '@iconify/react';

import buttonStyles from '../../../styles/app/common/buttons.module.css';
import styles from '../../../styles/app/common/form.module.css';

type RenderButtonProps = {
	compositionId: string;
	isLoading: boolean;
	videoUrl: string | undefined;
	error: string | undefined;
	onSubmit: (event: React.MouseEvent) => void;
};

export const RenderButton: React.FC<RenderButtonProps> = ({
	isLoading,
	videoUrl,
	error,
	compositionId,
	onSubmit,
}) => {
	return (
		<div className={styles.generateBtnContainer}>
			{error && (
				<div className={`${styles.infosCard} ${styles.error}`}>
					<p className={styles.error}>
						<Icon className={styles.statusIcon} icon="mingcute:close-fill" />
						{error}
					</p>
					<p className={styles.error}>Please wait a moment, then try again.</p>
				</div>
			)}
			{isLoading && (
				<div className={`${styles.infosCard} ${styles.loading}`}>
					<span className={buttonStyles.btnLoading}>
						Generating the video...
					</span>
					<p style={{fontSize: 12, paddingTop: 5}}>
						It can take a while so don&apos;t worry !
					</p>
				</div>
			)}
			{!isLoading && videoUrl && (
				<div className={`${styles.infosCard} ${styles.success}`}>
					<p>
						<Icon className={styles.statusIcon} icon="mingcute:check-fill" />
						Video generated successfully !
					</p>
					<a
						href={videoUrl}
						className={`${styles.download} ${buttonStyles.btn}`}
						target="_blank"
						download={compositionId}
					>
						Download
						<Icon icon="ic:round-download" />
					</a>
				</div>
			)}
			<button
				disabled={isLoading}
				type="submit"
				className={`${buttonStyles.btn} ${buttonStyles.btnPrimary} ${
					isLoading ? buttonStyles.disabled : ''
				}`}
				onClick={onSubmit}
			>
				Generate Video
			</button>
		</div>
	);
};

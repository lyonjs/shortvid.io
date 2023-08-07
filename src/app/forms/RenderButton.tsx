import {Icon} from '@iconify/react';

import {InfoCard} from './InfoCard';

import buttonStyles from '../../../styles/app/common/buttons.module.css';
import styles from '../../../styles/app/components/form/form.module.css';

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
				<InfoCard
					infoStatus="error"
					textContent={error}
					iconId="mingcute:close-fill"
				>
					<span>Please wait a moment, then try again.</span>
				</InfoCard>
			)}
			{isLoading && (
				<InfoCard infoStatus="loading" textContent="Generating the video...">
					<span>It can take a while so don&apos;t worry !</span>
				</InfoCard>
			)}
			{!isLoading && videoUrl && (
				<InfoCard
					infoStatus="success"
					textContent="Video generated successfully !"
					iconId="mingcute:check-fill"
				>
					<a
						href={videoUrl}
						className={`${styles.download} ${buttonStyles.btn}`}
						target="_blank"
						download={compositionId}
					>
						Download
						<Icon icon="ic:round-download" />
					</a>
				</InfoCard>
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

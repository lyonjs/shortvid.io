import React from 'react';

import {Loader} from '../components/Loader';

import buttonStyles from '../../../styles/app/common/buttons.module.css';
import styles from '../../../styles/app/common/form.module.css';

type RenderButtonProps = {
	compositionId: string;
	isLoading: boolean;
	videoUrl: string | undefined;
	error: string | undefined;
};

export const RenderButton: React.FC<RenderButtonProps> = ({
	isLoading,
	videoUrl,
	error,
	compositionId,
}) => {
	return (
		<div className={styles.generateBtnContainer}>
			{error && <p className={styles.error}>{error}</p>}
			<input
				disabled={isLoading}
				type="submit"
				className={`${buttonStyles.btn} ${buttonStyles.btnPrimary} ${
					isLoading ? buttonStyles.disabled : ''
				}`}
				value="Generate Video"
			/>
			{isLoading && (
				<span className={`${buttonStyles.btn} ${buttonStyles.btnLoading}`}>
					Loading <Loader />
				</span>
			)}
			{!isLoading && videoUrl && (
				<a
					href={videoUrl}
					className={`${buttonStyles.btn} ${buttonStyles.btnValidated}`}
					target="_blank"
					download={compositionId}
				>
					Download
				</a>
			)}
		</div>
	);
};

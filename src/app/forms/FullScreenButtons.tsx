import {useCallback, useState} from 'react';

import styles from '../../../styles/app/common/buttons.module.css';

export const FullScreenButtons: React.FC<{
	compositionName: string;
	fullScreenUrl: string;
}> = ({compositionName, fullScreenUrl}) => {
	const [copied, setCopied] = useState(false);

	const onClickHandler = useCallback(() => {
		const {origin} = window.location;
		navigator.clipboard.writeText(`${origin}${fullScreenUrl}`);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	}, [fullScreenUrl]);

	return (
		<>
			<button
				type="button"
				className={styles.btnText}
				onClick={() => {
					window.open(fullScreenUrl, '_blank');
				}}
			>
				Display {compositionName} 👀
			</button>
			<button
				type="button"
				className={styles.btnSecondary}
				onClick={onClickHandler}
			>
				{copied ? 'Copied ✅' : `Copy Fullscreen URL 🔗`}
			</button>
		</>
	);
};

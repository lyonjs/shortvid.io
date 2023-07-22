import {Thumbnail} from '@remotion/player';

import {CompositionType} from '../../../../data/config/sideBarConfig';
import {useCompositionConfig} from '../../../hooks/useCompositionConfig';

import styles from '../../../../../styles/app/components/sidebar/activeLink.module.css';

type CompositionThumbnailProps = {
	compositionType: CompositionType;
	compositionId: string;
	compositionName: string;
};

export const CompositionThumbnail: React.FC<CompositionThumbnailProps> = ({
	compositionType,
	compositionId,
	compositionName,
}) => {
	const videoConfig = useCompositionConfig(compositionType, compositionId);

	return (
		<div className={styles.thumbnailCard}>
			{videoConfig && (
				<>
					<span>
						<Thumbnail
							component={videoConfig.component}
							compositionWidth={videoConfig.width}
							compositionHeight={videoConfig.height}
							frameToDisplay={
								videoConfig.frameForThumbnail || videoConfig.durationInFrames
							}
							durationInFrames={videoConfig.durationInFrames}
							fps={videoConfig.fps || 30}
							inputProps={videoConfig.defaultProps}
						/>
					</span>
					<div>
						<h3>{compositionName}</h3>
						<p>{videoConfig.durationInSeconds}</p>
					</div>
				</>
			)}
		</div>
	);
};

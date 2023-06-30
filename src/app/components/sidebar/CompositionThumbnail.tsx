import {ReactNode} from 'react';
import {useCompositionConfig} from '../../hooks/useCompositionConfig';
import {Thumbnail} from '@remotion/player';
import {CompositionType} from '../../../data/sideBarConfig';
import styles from '../../../../styles/app/components/sidebar/activeLink.module.css';

export const CompositionThumbnail: React.FC<{
	compositionType: CompositionType;
	compositionId: string;
	children: ReactNode;
}> = ({compositionType, compositionId, children}) => {
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
						{children}
						<p>{videoConfig.durationInSeconds}</p>
					</div>
				</>
			)}
		</div>
	);
};

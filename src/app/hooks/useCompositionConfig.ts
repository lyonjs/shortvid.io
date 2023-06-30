import {CompositionsList} from '../../data/compositionsList';
import {CompositionType} from '../../data/sideBarConfig';

const formatTime = (numberToFormat: number) => {
	return ('0' + numberToFormat).slice(-2);
};

export const useCompositionConfig = (
	compositionType: CompositionType,
	compositionId: string
) => {
	const compositionDetails = CompositionsList[compositionType][compositionId];

	if (compositionDetails) {
		const fps = compositionDetails.fps || 30;
		const durationInSeconds = compositionDetails.durationInFrames / fps;
		const seconds = Math.floor(durationInSeconds);
		const miliseconds = Math.floor((durationInSeconds - seconds) * fps);

		const formatedDurationInSeconds = `${formatTime(seconds)}:${formatTime(
			miliseconds
		)}`;

		return {
			...compositionDetails,
			durationInSeconds: formatedDurationInSeconds,
		};
	}
};

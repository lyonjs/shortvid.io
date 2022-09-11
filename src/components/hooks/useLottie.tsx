import {useEffect, useState} from 'react';
import {continueRender, delayRender} from 'remotion';
import {LottieAnimationData} from '@remotion/lottie';

export const useLottie = (
	icon: undefined | string
): LottieAnimationData | null => {
	const [handle] = useState(() => delayRender('Loading Lottie animation'));
	const [animationData, setAnimationData] =
		useState<LottieAnimationData | null>(null);

	useEffect(() => {
		fetch(`https://assets9.lottiefiles.com/packages/${icon}.json`)
			.then((data) => data.json())
			.then((json) => {
				setAnimationData(json);
				continueRender(handle);
			})
			.catch((err) => {
				console.error('Animation failed to load', err);
			});
	}, [handle, icon]);

	return animationData;
};

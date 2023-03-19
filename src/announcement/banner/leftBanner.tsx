import React from 'react';
import {sideBannerRootStyle, sideBannerStyle} from '../style.constants';

export const LeftBanner: React.FC<{slideInValue: number}> = ({
	slideInValue,
}) => {
	return (
		<span
			style={{
				...sideBannerRootStyle,
				left: `${slideInValue}px`,
			}}
		>
			<span
				style={{
					...sideBannerStyle,
					clipPath: 'polygon(0 0, 5% 0, 10% 50%, 5% 100%, 0 100%)',
				}}
			/>
		</span>
	);
};

import React from 'react';
import {sideBannerRootStyle, sideBannerStyle} from '../style.constants';

export const RightBanner: React.FC<{slideInValue: number}> = ({
	slideInValue,
}) => {
	return (
		<span
			style={{
				...sideBannerRootStyle,
				right: `${slideInValue}px`,
			}}
		>
			<span
				style={{
					...sideBannerStyle,
					clipPath: 'polygon(100% 0, 95% 0, 90% 50%, 95% 100%, 100% 100%)',
				}}
			/>
		</span>
	);
};

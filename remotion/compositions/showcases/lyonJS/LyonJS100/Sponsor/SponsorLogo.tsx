import React from 'react';
import {Img} from 'remotion';

export const SponsorLogo = (props: {
	sponsorLogoUrl: string | undefined;
	opacityAnimation: number;
	scaleUpAnimation: number;
	sponsorLogoWidth: number | undefined;
}) => {
	return (
		<>
			{props.sponsorLogoUrl ? (
				<Img
					src={props.sponsorLogoUrl}
					alt="Sponsor Logo"
					style={{
						opacity: props.opacityAnimation,
						transform: `scale(${props.scaleUpAnimation})`,
						margin: 'auto',
						width: props.sponsorLogoWidth ?? 900,
						zIndex: 100
					}}
				/>
			) : null}
		</>
	);
};
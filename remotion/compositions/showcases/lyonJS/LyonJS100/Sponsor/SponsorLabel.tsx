import React from 'react';
import {loadFont} from '@remotion/google-fonts/Arvo';

const {fontFamily} = loadFont();

export const SponsorLabel = (props: {
	labelSponsor: string | undefined;
	labeSponsorColor: string | undefined;
	opacityAnimation: number;
	scaleUpAnimation: number;
	labelFontSize: number | undefined;
}) => {
	return (
		<>
			{props.labelSponsor ? (
				<p
					style={{
						fontFamily,
						opacity: props.opacityAnimation,
						transform: `scale(${props.scaleUpAnimation})`,
						color: '#222425',
						marginTop: 20,
						marginBottom: 80,
						fontSize: props.labelFontSize ?? 40,
						fontWeight: 'bolder',
						textAlign: 'center',
						textWrap: 'balance',
					}}
				>
					Sponsor <span style={{
						color: props.labeSponsorColor ?? '#222425',
				}}>{props.labelSponsor}</span>
				</p>
			) : null}
		</>
	);
};

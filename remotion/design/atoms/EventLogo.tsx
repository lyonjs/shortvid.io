import {CSSProperties} from 'react';
import {Img, staticFile} from 'remotion';

export interface EventLogoProps {
	style?: CSSProperties;
	src?: string;
}

export const EventLogo = ({style, src}: EventLogoProps) => {
	return src ? (
		<Img style={style} src={src} />
	) : (
		<Img style={style} src={staticFile('/lyonjs-squared.png')} />
	);
};

import {CSSProperties} from 'react';
import {Img, staticFile} from 'remotion';

export const LyonJSLogo: React.FC<{style?: CSSProperties}> = ({style}) => (
	<Img style={style} src={staticFile('/lyonjs-squared.png')} />
);

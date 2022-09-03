import {CSSProperties} from 'react';
import {Img} from 'remotion';
import logo from '../assets/logo.png';

export const LyonJSLogo: React.FC<{style?: CSSProperties}> = ({style}) => (
	<Img style={style} src={logo} />
);

import {CSSProperties} from 'react';
import {Img, staticFile} from 'remotion';

import {SHORTVID_ASSET_PATHS} from '../../theme';

export type EventLogoProps = {
	style?: CSSProperties;
	src?: string;
};

export const EventLogo = ({style, src}: EventLogoProps) => {
	return <Img style={style} src={src || staticFile(SHORTVID_ASSET_PATHS.monogram)} />;
};

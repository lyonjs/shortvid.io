import React from 'react';
import {loadFont} from '@remotion/google-fonts/Aldrich';
import {Title} from '../../../design/atoms/Title';

const {fontFamily} = loadFont();

type Props = {
	title: string;
	style?: React.CSSProperties;
};

export const LayerTitle: React.FC<Props> = ({title, style}) => {
	return (
		<Title
			style={{
				fontFamily,
				position: 'relative',
				fontWeight: 900,
				fontSize: '38px',
				zIndex: '2',
				padding: '30px',
				lineHeight: '52px',
				height: '100%',
				...style,
			}}
		>
			{title}
		</Title>
	);
};

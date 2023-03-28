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
				fontWeight: 900,
				fontSize: '38px',
				color: 'white',
				textAlign: 'center',
				zIndex: '2',
				flex: '1',
				padding: '30px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				lineHeight: '52px',
				height: 'auto',
				...style,
			}}
		>
			{title}
		</Title>
	);
};

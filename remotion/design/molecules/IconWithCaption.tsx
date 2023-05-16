import React from 'react';
import {Icon} from '@iconify/react';
import {Text} from '../atoms/Text';

export const IconWithCaption: React.FC<{
	iconifyId: string;
	caption: string;
	iconStyle?: React.CSSProperties;
	style?: React.CSSProperties;
}> = ({iconifyId, caption, style, iconStyle}) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '1rem',
				height: 'max-content',
				fontSize: '1.6rem',
				...style,
			}}
		>
			<Icon
				icon={iconifyId}
				style={{
					fontSize: '4rem',
					...iconStyle,
				}}
			/>
			<Text
				style={{
					position: 'relative',
					fontSize: 'inherit',
					color: 'inherit',
					width: 'max-content',
					padding: 0,
				}}
			>
				{caption}
			</Text>
		</div>
	);
};

import React, {ReactNode} from 'react';
import {Avatar} from '../atoms/Avatar';
import {Title} from '../atoms/Title';

export const AvatarWithCaption: React.FC<{
	avatarPictureUrl?: string;
	caption: ReactNode;
	avatarStyle?: React.CSSProperties;
	captionStyle?: React.CSSProperties;
	style?: React.CSSProperties;
}> = ({avatarPictureUrl, caption, avatarStyle, captionStyle, style}) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: '100%',
				height: 'max-content',
				gap: 20,
				...style,
			}}
		>
			<Avatar
				style={{
					...avatarStyle,
				}}
				src={avatarPictureUrl}
			/>
			<Title
				style={{
					fontSize: '4.5rem',
					...captionStyle,
				}}
			>
				{caption}
			</Title>
		</div>
	);
};

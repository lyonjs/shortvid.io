import {CSSProperties} from 'react';
import {Img, staticFile} from 'remotion';

export const Avatar: React.FC<{
	style?: CSSProperties;
	src?: string;
	size?: number;
}> = ({style, src = staticFile('defaultAvatar.png'), size = 500}) => {
	return (
		<Img
			style={{
				height: size,
				width: size,
				borderRadius: '50%',
				border: '30px solid white',
				backgroundColor: 'white',
				objectFit: 'cover',
				...style,
			}}
			src={src}
		/>
	);
};

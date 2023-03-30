import {CSSProperties} from 'react';
import {Img} from 'remotion';

export const AvatarPicture: React.FC<{
	style?: CSSProperties;
	src: string;
	size?: number;
}> = ({style, src, size = 500}) => {
	return (
		<Img
			style={{
				height: size,
				width: size,
				borderRadius: '50%',
				border: '30px solid white',
				backgroundColor: 'white',
				...style,
			}}
			src={src}
		/>
	);
};

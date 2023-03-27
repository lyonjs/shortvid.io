import {CSSProperties} from 'react';
export const Title: React.FC<{
	style?: CSSProperties;
	children: React.ReactNode;
}> = ({style, children}) => (
		<h1
			style={{
				fontFamily: 'Helvetica',
				fontSize: 50,
				fontWeight: 'bold',
				margin: 0,
				width: '100%',
				height: "max-content",
				display: '-webkit-box',
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				"-webkit-box-orient": 'vertical',
				"-webkit-line-clamp": '2',
				textOverflow: 'ellipsis',
				overflow:'hidden',
				padding: '0 20px',
				...style,
			}}
		>
			{children}
		</h1>
);

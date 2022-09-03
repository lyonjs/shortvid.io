import {CSSProperties} from 'react';

export const Title: React.FC<{
	style?: CSSProperties;
	children: React.ReactNode;
}> = ({style, children}) => (
	<h1
		style={{
			fontFamily: 'Helvetica',
			fontSize: 100,
			...style,
		}}
	>
		{children}
	</h1>
);

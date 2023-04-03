import React, {ReactNode} from 'react';

export const Text: React.FC<{
	children: ReactNode;
	style?: React.CSSProperties;
}> = ({children, style}) => {
	return (
		<p
			style={{
				fontFamily: 'Helvetica',
				height: 'max-content',
				margin: 0,
				padding: '0 20px',
				width: '100%',
				fontSize: '1.5rem',
				...style,
			}}
		>
			{children}
		</p>
	);
};

import React, {ReactNode} from 'react';

export const Text: React.FC<{
	children: ReactNode;
	style?: React.CSSProperties;
}> = ({children, style}) => {
	return (
		<span
			style={{
				fontFamily: 'Helvetica',
				height: 'max-content',
				margin: 0,
				padding: '0 20px',
				width: '100%',
				fontSize: '1.5rem',
				color: 'white',
				textAlign: 'center',
				...style,
			}}
		>
			{children}
		</span>
	);
};

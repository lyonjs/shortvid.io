import React, {ReactNode} from 'react';
import {useSelectedFont} from '../../../src/app/hooks/useSelectedFont';

export const Text: React.FC<{
	children: ReactNode;
	style?: React.CSSProperties;
}> = ({children, style}) => {
	const {selectedFont} = useSelectedFont();

	return (
		<span
			style={{
				fontFamily: selectedFont,
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

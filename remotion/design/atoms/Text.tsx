import React, {ReactNode, useContext} from 'react';
import {FontContext} from '../../../src/context/fonts/FontCountext';

export const Text: React.FC<{
	children: ReactNode;
	style?: React.CSSProperties;
}> = ({children, style}) => {
	const {selectedFont} = useContext(FontContext);

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

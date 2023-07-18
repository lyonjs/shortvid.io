'use client';

import {ReactNode, useCallback, useRef, useState} from 'react';

import styles from '../../../../styles/app/components/sidebar/resizeWrapper.module.css';

export const ResizeWrapper: React.FC<{
	handleSide?: 'left' | 'right';
	children: ReactNode;
}> = ({handleSide = 'right', children}) => {
	const resizableRef = useRef<HTMLDivElement | null>(null);
	const [sidebarWidth, setSidebarWidth] = useState<number>(315);

	const resize = useCallback((event: React.DragEvent<HTMLSpanElement>) => {
		if (event.clientX !== 0 && event.clientX >= 240) {
			setSidebarWidth(event.clientX - 20);
		}
	}, []);

	return (
		<div className={styles.resizeWrapper} style={{width: `${sidebarWidth}px`}}>
			<span
				className={`${handleSide === 'left' ? styles.handleLeft : ''}`}
				draggable={true}
				onDrag={resize}
			/>
			<div ref={resizableRef} style={{width: sidebarWidth}}>
				{children}
			</div>
		</div>
	);
};

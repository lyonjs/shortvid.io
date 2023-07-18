'use client';

import {ReactNode, useCallback, useContext, useRef, useState} from 'react';

import styles from '../../../../styles/app/components/sidebar/resizeWrapper.module.css';
import {SidebarContext} from '../../../context/SidebarContext';

export const ResizeWrapper: React.FC<{
	handleSide?: 'left' | 'right';
	children: ReactNode;
}> = ({handleSide = 'right', children}) => {
	const {expanded} = useContext(SidebarContext);

	const resizableRef = useRef<HTMLDivElement | null>(null);
	const [sidebarWidth, setSidebarWidth] = useState<number>(315);

	const resize = useCallback((event: React.DragEvent<HTMLSpanElement>) => {
		if (event.clientX !== 0 && event.clientX >= 240) {
			setSidebarWidth(event.clientX - 20);
		}
	}, []);

	return (
		<div
			className={`${styles.resizeWrapper} ${!expanded ? styles.folded : ''}`}
			style={{width: `${sidebarWidth}px`}}
		>
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

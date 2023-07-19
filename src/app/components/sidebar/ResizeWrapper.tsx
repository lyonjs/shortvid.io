'use client';

import {
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';

import styles from '../../../../styles/app/components/sidebar/resizeWrapper.module.css';
import {SidebarContext} from '../../../context/SidebarContext';

export const ResizeWrapper: React.FC<{
	handleSide?: 'left' | 'right';
	children: ReactNode;
}> = ({handleSide = 'right', children}) => {
	const {expanded} = useContext(SidebarContext);

	const resizableRef = useRef<HTMLDivElement | null>(null);
	const [isResizing, setIsResizing] = useState<boolean>(false);
	const [sidebarWidth, setSidebarWidth] = useState<number>(315);

	const startResize = useCallback(() => {
		setIsResizing(true);
	}, []);

	const stopResize = useCallback(() => {
		setIsResizing(false);
	}, []);

	const resize = useCallback(
		(event: MouseEvent) => {
			if (isResizing) {
				if (event.clientX !== 0 && event.clientX >= 230) {
					setSidebarWidth(event.clientX - 20);
				} else {
					setSidebarWidth(220);
				}
			}
		},
		[isResizing]
	);

	useEffect(() => {
		window.addEventListener('mousemove', resize);
		window.addEventListener('mouseup', stopResize);
		return () => {
			window.removeEventListener('mousemove', resize);
			window.removeEventListener('mouseup', stopResize);
		};
	}, [resize, stopResize]);

	return (
		<div
			className={`${styles.resizeWrapper} ${!expanded ? styles.folded : ''}`}
			style={{width: `${sidebarWidth}px`}}
			onMouseDown={(e) => e.preventDefault()}
			data-testid="resizableWrapper"
		>
			<span
				className={`${handleSide === 'left' ? styles.handleLeft : ''}`}
				onMouseDown={startResize}
				data-testid="resizeGrabber"
			/>
			<div ref={resizableRef} style={{width: sidebarWidth}}>
				{children}
			</div>
		</div>
	);
};

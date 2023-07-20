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

export const DEFAULT_SIDEBAR_WIDTH = 315;
export const MIN_SIDEBAR_WIDTH = 220;
export const DEFAULT_GRABBER_WIDTH = 20;

export const ResizeWrapper: React.FC<{
	children: ReactNode;
}> = ({children}) => {
	const {expanded} = useContext(SidebarContext);

	const resizableRef = useRef<HTMLDivElement | null>(null);
	const [isResizing, setIsResizing] = useState(false);
	const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_SIDEBAR_WIDTH);

	const startResize = () => {
		setIsResizing(true);
	};

	const stopResize = () => {
		setIsResizing(false);
	};

	const resize = useCallback(
		(event: MouseEvent) => {
			if (isResizing) {
				const newSidebarWidth = event.clientX - DEFAULT_GRABBER_WIDTH;

				if (event.clientX !== 0 && newSidebarWidth >= MIN_SIDEBAR_WIDTH) {
					setSidebarWidth(newSidebarWidth);
				} else {
					setSidebarWidth(MIN_SIDEBAR_WIDTH);
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
			<span onMouseDown={startResize} data-testid="resizeGrabber" />
			<div ref={resizableRef} style={{width: sidebarWidth}}>
				{children}
			</div>
		</div>
	);
};

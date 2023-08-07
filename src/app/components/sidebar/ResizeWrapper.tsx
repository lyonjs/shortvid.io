'use client';

import {
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';

import {SidebarContext} from '../../../context/SidebarContext';

import styles from '../../../../styles/app/components/sidebar/resizeWrapper.module.css';
import mainStyle from '../../../../styles/app/layout/main.module.css';

export const DEFAULT_SIDEBAR_WIDTH = 315;
export const MIN_SIDEBAR_WIDTH = 220;
export const MAX_SIDEBAR_WIDTH = 500;
export const DEFAULT_GRABBER_WIDTH = 20;

export const ResizeWrapper: React.FC<{
	resizableSide?: 'left' | 'right';
	children: ReactNode;
}> = ({resizableSide = 'right', children}) => {
	const {expanded} = useContext(SidebarContext);

	const resizableRef = useRef<HTMLDivElement | null>(null);
	const [isResizing, setIsResizing] = useState(false);
	const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_SIDEBAR_WIDTH);

	const startResize = () => {
		setIsResizing(true);
	};

	const resize = useCallback(
		(event: MouseEvent) => {
			if (isResizing) {
				const resizeFromRightWidth = event.clientX - DEFAULT_GRABBER_WIDTH;
				const resizeFromLeftWidth =
					window.innerWidth - (event.clientX + DEFAULT_GRABBER_WIDTH);

				const newSidebarWidth =
					resizableSide === 'right'
						? resizeFromRightWidth
						: resizeFromLeftWidth;

				setSidebarWidth(
					Math.min(
						Math.max(newSidebarWidth, MIN_SIDEBAR_WIDTH),
						MAX_SIDEBAR_WIDTH,
					),
				);
			}
		},
		[isResizing, resizableSide],
	);

	const disableSelect = (event: MouseEvent) => {
		event.preventDefault();
	};

	useEffect(() => {
		const stopResize = () => {
			setIsResizing(false);
		};

		window.addEventListener('mousemove', resize);
		window.addEventListener('mouseup', stopResize);

		if (isResizing) {
			window.addEventListener('mousedown', disableSelect);
		} else {
			window.removeEventListener('mousedown', disableSelect);
		}

		return () => {
			window.removeEventListener('mousemove', resize);
			window.removeEventListener('mouseup', stopResize);
			window.removeEventListener('mousedown', disableSelect);
		};
	}, [resize, isResizing]);

	return (
		<div
			className={`${styles.resizeWrapper} ${!expanded ? mainStyle.folded : ''}`}
			style={{width: `${sidebarWidth}px`}}
			data-testid="resizableWrapper"
			data-resizableside={resizableSide}
		>
			<span onMouseDown={startResize} data-testid="resizeGrabber" />
			<div ref={resizableRef} style={{width: sidebarWidth}}>
				{children}
			</div>
		</div>
	);
};

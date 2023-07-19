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
	position?: 'left' | 'right';
	children: ReactNode;
}> = ({position = 'left', children}) => {
	const sideClassName = position === 'right' ? styles.positionRight : '';

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
				const positionedRightCalc = window.innerWidth - (event.clientX + 20);
				const positionLeftCalc = event.clientX - 20;

				const newValue =
					position === 'right' ? positionedRightCalc : positionLeftCalc;

				if (event.clientX !== 0 && newValue >= 220) {
					setSidebarWidth(newValue);
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
			className={`${styles.resizeWrapper} ${sideClassName} ${
				!expanded ? styles.folded : ''
			}`}
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

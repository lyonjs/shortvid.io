'use client';

import {
	cloneElement,
	DetailedReactHTMLElement,
	useEffect,
	useRef,
	useState,
} from 'react';

import {Icon} from '@iconify/react';

import styles from '../../../../styles/app/components/sidebar/resizeWrapper.module.css';

export const ResizeWrapper: React.FC<{
	handleSide?: 'left' | 'right';
	children: DetailedReactHTMLElement<any, HTMLElement>;
}> = ({handleSide = 'right', children}) => {
	const [expanded, setExpanded] = useState<boolean>(true);

	const [initialPos, setInitialPos] = useState<number | null>(null);
	const [initialSize, setInitialSize] = useState<number>(315);

	const resizableRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (resizableRef.current) {
			resizableRef.current.style.width = '315px';
		}
	}, []);

	const initial = (e: React.DragEvent<HTMLSpanElement>) => {
		if (resizableRef.current) {
			setInitialPos(e.clientX);
			setInitialSize(resizableRef.current.offsetWidth);
		}
	};

	const resize = (e: React.DragEvent<HTMLSpanElement>) => {
		if (resizableRef.current && initialPos && initialSize) {
			const newWidth = initialSize + (e.clientX - initialPos);

			if (newWidth >= 215 && newWidth <= 500) {
				resizableRef.current.style.width = `${newWidth}px`;
			}
		}
	};

	const handleExpanded = () => {
		const newValue = !expanded;
		setExpanded(newValue);
		if (resizableRef.current) {
			if (!newValue) {
				resizableRef.current.style.width = '110px';
			} else {
				resizableRef.current.style.width = '215px';
			}
		}
	};

	return (
		<div className={styles.resizeWrapper} aria-expanded={expanded}>
			<span
				className={`${handleSide === 'left' ? styles.handleLeft : ''}`}
				draggable={true}
				onDragStart={initial}
				onDrag={resize}
			/>
			<div ref={resizableRef}>
				{cloneElement(children, {expanded})}
				<button
					type="button"
					aria-label="foldButton"
					className={styles.foldButton}
					onClick={handleExpanded}
				>
					<Icon icon="iconamoon:arrow-left-2" />
				</button>
			</div>
		</div>
	);
};

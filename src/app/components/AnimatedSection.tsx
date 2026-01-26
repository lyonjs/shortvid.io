'use client';

import {ReactNode} from 'react';

import {useScrollAnimation} from '../hooks/useScrollAnimation';

type AnimationType = 'slide-up' | 'fade' | 'scale';

interface AnimatedSectionProps {
	children: ReactNode;
	animation?: AnimationType;
	className?: string;
	delay?: number;
}

const animationClasses: Record<AnimationType, string> = {
	'slide-up': 'scroll-animate',
	fade: 'scroll-animate-fade',
	scale: 'scroll-animate-scale',
};

export const AnimatedSection = ({
	children,
	animation = 'slide-up',
	className = '',
	delay = 0,
}: AnimatedSectionProps) => {
	const {ref, isVisible} = useScrollAnimation();

	const animationClass = animationClasses[animation];
	const visibleClass = isVisible ? 'visible' : '';

	return (
		<div
			ref={ref as React.RefObject<HTMLDivElement>}
			className={`${animationClass} ${visibleClass} ${className}`.trim()}
			style={{transitionDelay: delay ? `${delay}ms` : undefined}}
		>
			{children}
		</div>
	);
};

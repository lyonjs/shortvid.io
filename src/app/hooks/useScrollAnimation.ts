'use client';

import {useEffect, useRef, useState} from 'react';

interface UseScrollAnimationOptions {
	threshold?: number;
	rootMargin?: string;
	triggerOnce?: boolean;
}

export const useScrollAnimation = ({
	threshold = 0.1,
	rootMargin = '0px 0px -50px 0px',
	triggerOnce = true,
}: UseScrollAnimationOptions = {}) => {
	const ref = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					if (triggerOnce) {
						observer.unobserve(element);
					}
				} else if (!triggerOnce) {
					setIsVisible(false);
				}
			},
			{threshold, rootMargin},
		);

		observer.observe(element);

		return () => observer.disconnect();
	}, [threshold, rootMargin, triggerOnce]);

	return {ref, isVisible};
};

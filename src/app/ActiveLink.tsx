'use client';

import {Children, cloneElement, FC, ReactElement, ReactNode} from 'react';
import {LinkProps} from 'next/link';
import {usePathname} from 'next/navigation';

type ActiveLinkProps = LinkProps & {
	children: ReactNode;
};

export const ActiveLink: FC<ActiveLinkProps> = ({children, href}) => {
	const pathname = usePathname();
	const child = Children.only(children) as ReactElement;
	const childClassName = child?.props?.className || '';

	const isActive = pathname === href;

	const backgroundClassName = isActive
		? 'bg-primary'
		: 'bg-color-btn-background';

	return (
		<a href={href as string}>
			{cloneElement(child, {
				className: `${childClassName} ${backgroundClassName}` || null,
			})}
		</a>
	);
};

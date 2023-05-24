'use client';

import {Children, cloneElement, FC, ReactElement, ReactNode} from 'react';
import {LinkProps} from 'next/link';
import {usePathname} from 'next/navigation';

type ActiveLinkProps = LinkProps & {
	children: ReactNode;
	activeClassName?: string;
};

export const ActiveLink: FC<ActiveLinkProps> = ({
	children,
	activeClassName = 'bg-purple-200',
	href,
}) => {
	const pathname = usePathname();
	const child = Children.only(children) as ReactElement;
	const childClassName = child?.props?.className || '';

	const className =
		pathname === href
			? `${childClassName} ${activeClassName}`.trim()
			: childClassName;

	return (
		<a href={href as string}>
			{cloneElement(child, {
				className: className || null,
			})}
		</a>
	);
};

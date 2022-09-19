import {Children, cloneElement, FC, ReactElement, ReactNode} from 'react';
import Link, {LinkProps} from 'next/link';
import {useRouter} from 'next/router';

type ActiveLinkProps = LinkProps & {
	children: ReactNode;
	activeClassName?: string;
};

export const ActiveLink: FC<ActiveLinkProps> = ({
	children,
	activeClassName = 'bg-yellow-300',
	href,
}) => {
	const {asPath} = useRouter();
	const child = Children.only(children) as ReactElement;
	const childClassName = child?.props?.className || '';

	const className =
		asPath === href
			? `${childClassName} ${activeClassName}`.trim()
			: childClassName;

	return (
		<Link href={href}>
			{cloneElement(child, {
				className: className || null,
			})}
		</Link>
	);
};

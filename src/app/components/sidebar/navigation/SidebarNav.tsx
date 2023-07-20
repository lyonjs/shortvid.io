'use client';

import {Footer} from './Footer';
import {Header} from './Header';
import {Nav} from './Nav';

export const SidebarNav: React.FC<{expanded?: boolean}> = ({
	expanded = true,
}) => {
	return (
		<>
			<Header expanded={expanded} />
			<Nav expanded={expanded} />
			<Footer expanded={expanded} />
		</>
	);
};

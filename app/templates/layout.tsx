import {ReactNode} from 'react';

import RootLayout from '../../src/app/RootLayout';

import '../../styles/globals.css';

export default function TemplatesLayout({children}: {children: ReactNode}) {
	return <RootLayout>{children}</RootLayout>;
}

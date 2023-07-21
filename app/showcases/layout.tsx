import {ReactNode} from 'react';

import RootLayout from '../../src/app/RootLayout';

import '../../styles/globals.css';

export default function ShowcasesLayout({children}: {children: ReactNode}) {
	return <RootLayout>{children}</RootLayout>;
}

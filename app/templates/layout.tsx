import {ReactNode} from 'react';

import '../../styles/globals.css';
import RootLayout from '../../src/app/RootLayout';

export default function TemplatesLayout({children}: {children: ReactNode}) {
	return <RootLayout>{children}</RootLayout>;
}

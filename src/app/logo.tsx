import React from 'react';
import Image from 'next/image';
import {useThemeName} from './hooks/useThemeName';

export const Logo: React.FC<{size: number; className?: string}> = ({
	size,
	className,
}) => {
	const theme = useThemeName();

	return (
		<>
			{theme === 'light' && (
				<Image
					className={className}
					src="/branding/monogram-color.svg"
					alt="Shortvid.io Logo"
					width={size}
					height={size}
				/>
			)}
			{theme === 'dark' && (
				<Image
					className={className}
					src="/branding/monogram-white.svg"
					alt="Shortvid.io Logo"
					width={size}
					height={size}
				/>
			)}
		</>
	);
};

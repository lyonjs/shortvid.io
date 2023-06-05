'use client';

import {useTheme} from 'next-themes';
import {Icon} from '@iconify/react';
import {useState} from 'react';
import styles from '../../styles/app/inputs/button.module.css';

type selectedThemeTypes = 'dark' | 'light' | 'system';

export const SwitchThemeButton = () => {
	const {setTheme, systemTheme} = useTheme();
	const [selectedTheme, setSelectedTheme] = useState<string>(
		localStorage.getItem('theme') || 'system'
	);
	const handleSelectTheme = (
		newTheme: string,
		clickedButton: selectedThemeTypes
	) => {
		setTheme(newTheme);
		setSelectedTheme(clickedButton);
	};

	return (
		<div className={styles.switchThemeGroup} role="radiogroup">
			<button
				aria-checked={selectedTheme === 'dark'}
				aria-label="Dark"
				className=""
				role="radio"
				type="button"
				value="dark"
				onClick={(e) => handleSelectTheme(e.currentTarget.value, 'dark')}
			>
				<SwitchIcon iconifyId="ph:moon" />
			</button>
			<button
				aria-checked={selectedTheme === 'light'}
				aria-label="Light"
				role="radio"
				type="button"
				value="light"
				onClick={(e) => handleSelectTheme(e.currentTarget.value, 'light')}
			>
				<SwitchIcon iconifyId="ph:sun" />
			</button>
			<button
				aria-checked={selectedTheme === 'system'}
				aria-label="System"
				role="radio"
				type="button"
				value={systemTheme}
				onClick={(e) => handleSelectTheme(e.currentTarget.value, 'system')}
			>
				<SwitchIcon iconifyId="gg:screen" />
			</button>
		</div>
	);
};

const SwitchIcon: React.FC<{iconifyId: string}> = ({iconifyId}) => {
	return <Icon icon={iconifyId} width={20} height={20} />;
};

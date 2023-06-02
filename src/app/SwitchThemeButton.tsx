import {useTheme} from 'next-themes';
import {useThemeName} from './hooks/useThemeName';
import styles from '../../styles/app/inputs/button.module.css';

export const SwitchThemeButton = () => {
	const {setTheme} = useTheme();
	const theme = useThemeName();

	return (
		<button
			className={styles.switchThemeButton}
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			Switch to {theme === 'dark' ? 'light' : 'dark'} mode
		</button>
	);
};

import styles from '../../../../styles/app/components/sidebar/sidebar.module.css';
import {SwitchThemeButtons} from '../../SwitchThemeButtons';
import {Icon} from '@iconify/react';

export const Footer: React.FC<{folded: boolean}> = ({folded}) => {
	return (
		<footer>
			<a
				href="https://github.com/lyonjs/shortvid.io"
				className={styles.contributeLink}
			>
				<Icon icon="mdi:github" />
				{!folded && <span>Contributing</span>}
			</a>
			<SwitchThemeButtons />
		</footer>
	);
};

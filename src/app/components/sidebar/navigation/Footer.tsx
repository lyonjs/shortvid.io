import {Icon} from '@iconify/react';

import {SwitchThemeButtons} from '../../../SwitchThemeButtons';

import styles from '../../../../../styles/app/components/sidebar/sidebar.module.css';

export const Footer: React.FC<{expanded: boolean}> = ({expanded}) => {
	return (
		<footer>
			<a
				href="https://github.com/lyonjs/shortvid.io"
				className={styles.contributeLink}
			>
				<Icon icon="mdi:github" />
				{expanded && <span>Contributing</span>}
			</a>
			<SwitchThemeButtons />
		</footer>
	);
};

import React, {ReactNode} from 'react';

import styles from '../../../styles/app/common/form.module.css';

export const Form: React.FC<{children: ReactNode}> = ({children}) => {
	return <form className={styles.videoForm}>{children}</form>;
};

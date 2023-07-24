import React, {useCallback, useState} from 'react';
import {usePathname} from 'next/navigation';

import {formatUrlWithQuery,QueryParams} from './utils/formatUrlWithQuery';

import styles from '../../styles/app/common/buttons.module.css';

export const CopyUrlButton: React.FC<{urlParameters: QueryParams}> = ({
	urlParameters,
}) => {
	const [copied, setCopied] = useState(false);
	const pathname = usePathname();

	const urlWithParams = formatUrlWithQuery(urlParameters, pathname);

	const onClickHandler = useCallback(() => {
		const {origin} = window.location;
		navigator.clipboard.writeText(`${origin}${urlWithParams}`);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	}, [urlWithParams]);

	return (
		<button
			type="button"
			className={styles.primaryButton}
			onClick={onClickHandler}
		>
			{copied ? 'Copied ✅' : 'Copy URL 🔗'}
		</button>
	);
};

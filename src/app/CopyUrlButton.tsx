import React, {useCallback, useState} from 'react';

import {usePathname} from 'next/navigation';

import {QueryParams, formatUrlWithQuery} from './utils/formatUrlWithQuery';

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
			className="relative text-color-btn-text py-2 px-4 text-center text-xl font-bold bg-primary rounded-xl mt-4 hover:scale-105"
			onClick={onClickHandler}
		>
			{copied ? 'Copied ✅' : 'Copy URL 🔗'}
		</button>
	);
};

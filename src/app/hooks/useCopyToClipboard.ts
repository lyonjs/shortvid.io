import {useCallback} from 'react';

type CopyFunction = (toCopy: string) => void;

export const useCopyToClipboard = (
	setCopied: (value: boolean) => void
): CopyFunction => {
	const copyToClipboard = useCallback(
		(url: string) => {
			navigator.clipboard.writeText(url);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		},
		[setCopied]
	);

	return copyToClipboard;
};

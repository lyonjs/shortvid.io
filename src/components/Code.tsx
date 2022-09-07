import {MouseEvent, ReactNode, useCallback} from 'react';

export const Code: React.FC<{children: ReactNode}> = ({children}) => {
	const onClickHandler = useCallback((event: MouseEvent) => {
		const element = event.target as HTMLElement;
		if (element.textContent) {
			navigator.clipboard.writeText(element.textContent);
		}
	}, []);

	return <code onClick={onClickHandler}>{children}</code>;
};

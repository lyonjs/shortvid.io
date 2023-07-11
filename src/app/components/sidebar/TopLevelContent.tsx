import {Icon} from '@iconify/react';

type TopLevelContentProps = {
	expanded: boolean;
	iconifyId: string;
	textContent: string;
};

export const TopLevelContent: React.FC<TopLevelContentProps> = ({
	expanded,
	iconifyId,
	textContent,
}) => {
	return (
		<>
			<Icon icon={iconifyId} />
			{expanded && textContent}
		</>
	);
};

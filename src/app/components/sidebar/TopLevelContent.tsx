import {Icon} from '@iconify/react';

type TopLevelContentProps = {
	folded: boolean;
	iconifyId: string;
	textContent: string;
};

export const TopLevelContent: React.FC<TopLevelContentProps> = ({
	folded,
	iconifyId,
	textContent,
}) => {
	return (
		<>
			<Icon icon={iconifyId} />
			{!folded && textContent}
		</>
	);
};

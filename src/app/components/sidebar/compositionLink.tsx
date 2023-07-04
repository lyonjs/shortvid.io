export const CompositionLink: React.FC<{
	compositionName: string;
}> = ({compositionName}) => {
	return (
		<li>
			<span>{compositionName}</span>
		</li>
	);
};

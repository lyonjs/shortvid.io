export const CompositionThumbnailMock: React.FC<{
	compositionName: string;
}> = ({compositionName}) => {
	return (
		<div>
			<h3>{compositionName}</h3>
		</div>
	);
};

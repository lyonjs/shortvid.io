import {LeftTriangle} from '../components/LeftTriangle';
import {RightTriangle} from '../components/RightTriangle';

export const BackgroundTriangle = ({
	primaryColor = '#323330',
	secondaryColor = '#efdb4f',
	isAnimated = true,
}: {
	primaryColor?: string;
	secondaryColor?: string;
	isAnimated?: boolean;
}) => {
	return (
		<>
			<RightTriangle color={secondaryColor} isAnimated={isAnimated} />
			<LeftTriangle color={primaryColor} isAnimated={isAnimated} />
		</>
	);
};

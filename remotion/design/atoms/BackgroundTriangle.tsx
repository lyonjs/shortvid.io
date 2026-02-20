import {SHORTVID_COLORS} from '../../theme';
import {LeftTriangle} from '../components/LeftTriangle';
import {RightTriangle} from '../components/RightTriangle';

export const BackgroundTriangle = ({
	primaryColor = SHORTVID_COLORS.primary,
	secondaryColor = SHORTVID_COLORS.secondary,
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

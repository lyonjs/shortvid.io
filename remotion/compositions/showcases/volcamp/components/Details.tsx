import {TalkDetails} from '../../../../design/molecules/TalkDetails';
import {Img, staticFile} from 'remotion';

export const Details: React.FC<{
	date: string;
	time: string;
	location: string;
}> = ({date, time, location}) => {
	const commonMountainStyle = {
		position: 'absolute',
		bottom: 0,
	} as React.CSSProperties;

	return (
		<div
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
			}}
		>
			<Img
				src={staticFile('images/showcases/volcamp/mountainCenter.svg')}
				alt="Center Mountain"
				width={475}
				height={153}
				style={{
					...commonMountainStyle,
					left: '50%',
					transform: 'translateX(-42%)',
				}}
			/>
			<Img
				src={staticFile('images/showcases/volcamp/mountainLeft.svg')}
				alt="Left Mountain"
				width={524}
				height={172}
				style={{
					...commonMountainStyle,
					left: 0,
				}}
			/>
			<Img
				src={staticFile('images/showcases/volcamp/mountainRight.svg')}
				alt="Right Mountain"
				width={462}
				height={170}
				style={{
					...commonMountainStyle,
					right: 0,
				}}
			/>
			<TalkDetails
				items={{
					date,
					time,
					location,
					icons: {
						locationIcon: 'fluent:location-28-filled',
					},
				}}
				style={{bottom: 15}}
				textStyle={{
					fontSize: '24px',
					fontFamily: 'inherit',
					fontWeight: '500',
				}}
				iconStyle={{
					fontSize: '50px',
				}}
			/>
		</div>
	);
};

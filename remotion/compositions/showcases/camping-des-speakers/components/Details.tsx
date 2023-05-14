import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {TalkDetails} from '../../../design/molecules/TalkDetails';

export const Details: React.FC<{
	date: string;
	time: string;
	location: string;
}> = ({date, time, location}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const drop = spring({frame, from: -20, to: 30, fps, durationInFrames: 30});
  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
  });

  return (
    <TalkDetails
      items={{
        date,
        time,
        location,
      }}
      style={{
        opacity,
        bottom: drop,
        fontSize: '1.4rem',
        textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',
      }}
      iconStyle={{
        opacity,
        bottom: drop,
        fontSize: '1.8rem',
        filter: 'drop-shadow(0 0 0.2rem black)',
      }}
    />
	);
};

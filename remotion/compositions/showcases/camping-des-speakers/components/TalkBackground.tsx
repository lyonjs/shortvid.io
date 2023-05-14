import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {CSSProperties} from "react";

interface SideProps {
  parentStyle: CSSProperties;
  childrenStyle: CSSProperties;
}

const Side: React.FC<SideProps> = ({parentStyle, childrenStyle}) => {
  return (
    <span
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        ...parentStyle,
      }}
    >
				<span
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#116299',
            ...childrenStyle,
          }}
        />
			</span>
  )
}

export const TalkBackground = () => {
	const frame = useCurrentFrame();

	const backgroundOpacity = interpolate(frame, [0, 20], [0, 1]);

	return (
		<AbsoluteFill
			style={{
				opacity: backgroundOpacity,
				backgroundColor: '#116299',
			}}
		>
      <Side childrenStyle={{clipPath: 'polygon(0 0, 0% 100%, 30% 0)'}} parentStyle={{filter: 'drop-shadow(20px 20px 32px #083A5AFF)'}} />
      <Side childrenStyle={{clipPath: 'polygon(100% 0, 100% 100%, 70% 0)'}} parentStyle={{filter: 'drop-shadow(-20px -20px 32px #083A5AFF)'}} />
		</AbsoluteFill>
	);
};

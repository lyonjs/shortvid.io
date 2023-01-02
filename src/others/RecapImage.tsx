import {Img, interpolate, Sequence, useCurrentFrame} from 'remotion';
import {loadFont} from "@remotion/google-fonts/DancingScript";

export const RecapImage: React.FC<{
    srcImage?: string;
    text?: string;
    startAnimationShift: number;
    isCover?: boolean;
}> = ({srcImage, text, startAnimationShift, isCover= true}) => {
    const frame = useCurrentFrame();
    const opacityImage = interpolate(frame, [startAnimationShift, startAnimationShift + 20], [0, 1], {
        extrapolateRight: 'clamp',
    });
    const {fontFamily} = loadFont("normal", {
        weights: ["400", "500", "600", "700"],
    });

    return (
        <Sequence from={startAnimationShift} durationInFrames={80} name="Picture2">
            <Img src={srcImage} style={{
                opacity: opacityImage,
                width: '100%',
                height: '100%',
                border: '100px solid white',
                borderRadius: '5px',
                borderBottom: '300px solid white',
                objectFit: isCover ? 'cover' : 'contain',
                margin: '0 auto',
                boxShadow: '0 0 10px 0px #000000',
                backgroundColor: 'white',
            }}/>
            <span style={{
                fontFamily,
                opacity: opacityImage,
                position: 'absolute',
                bottom: '100px',
                width: '100%',
                textAlign: 'center',
                fontSize: 90,
                fontWeight: 700,
            }}>{text}</span>
        </Sequence>
    );
};

import {
    AbsoluteFill,
    Audio,
    Img,
    interpolate,
    Sequence,
    spring,
    staticFile,
    useCurrentFrame,
    useVideoConfig
} from 'remotion'
import {LottieAsset} from '../components/LottieAsset';
import {loadFont} from "@remotion/google-fonts/DancingScript";
import {RecapImage} from "./RecapImage";
import {LyonJSLogo} from "../components/LyonJSLogo";

const {fontFamily} = loadFont("normal", {
    weights: ["400", "500", "600", "700"],
});

export const Celebration: React.FC<{
    backgroundImg?: string;
    title: string;
    lottieAsset?: string;
    paillettesAsset?: string;
}> = ({
          backgroundImg = 'https://static.vecteezy.com/system/resources/previews/004/930/679/non_2x/winter-snowy-mountain-portrait-wallpaper-vector.jpg',
          lottieAsset = 'lf20_vrbtloig',
      }) => {

    const frame = useCurrentFrame();
    const {fps, width} = useVideoConfig();
    const halfScreen = width / 2;
    const animationDirection = frame > 100 ? 'backward' : 'forward';
    const opacity = interpolate(frame, [170, 190], [0, 1]);
    const opacityTextOrga = interpolate(frame, [570, 610], [0, 1]);
    const scaleMessage = interpolate(frame, [530, 550], [0, 1], {
        extrapolateRight: "clamp",
    });
    const scaleRecap = interpolate(frame, [170, 190], [0, 1], {
        extrapolateRight: "clamp",
    });
    const scaleUpText = spring({
        frame: frame - 190,
        fps,
        durationInFrames: 30,
    });
    const scaleUpTextOrga = spring({
        frame: frame - 570,
        fps,
        durationInFrames: 30,
    });
    const animateRightToLeft = interpolate(frame, [540, 590], [0, -halfScreen / 2]);


    return (
        <AbsoluteFill>
            <Img
                src={backgroundImg}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />

            <Sequence from={0} name="Song">
                <Audio src={staticFile("music/christmas.mp3")} startFrom={15}/>
            </Sequence>

            <Sequence from={0} name="Snow">
                <LottieAsset loop assetLink={lottieAsset} style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                }}/>
            </Sequence>

            <Sequence from={30} durationInFrames={220} name="Decoration">
                <LottieAsset direction={animationDirection} assetLink='lf20_Pe2er7' style={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                }}/>
                <LottieAsset direction={animationDirection} assetLink='lf20_jbD0A2' style={{
                    position: 'absolute',
                    bottom: '0',
                    width: '60%',
                }}/>
            </Sequence>

            <Sequence from={170} durationInFrames={100} name="Picture1">
                <AbsoluteFill style={{
                    backgroundColor: 'white',
                    transform: `scale(${scaleRecap})`,
                }}>
                    <div style={{
                        display: 'flex',
                        width: '100%',
                        height: '100%',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '100px',
                    }}>
                        <LyonJSLogo style={{
                            opacity,
                            width: '500px',
                        }}/>
                        <span style={{
                            opacity,
                            fontFamily,
                            fontSize: 80,
                            fontWeight: 700,
                            transform: `scale(${scaleUpText})`,
                        }}>LyonJS en 2022 c&apos;est ...</span>
                    </div>
                </AbsoluteFill>
            </Sequence>

            <RecapImage
                srcImage="https://pbs.twimg.com/media/Fi1YgSwXoAAcjHY?format=jpg&name=large"
                text="12 meetups organisés..."
                startAnimationShift={250}
            />
            <RecapImage
                srcImage="https://pbs.twimg.com/media/FdwpyG5XkAEUinu?format=jpg&name=large"
                text="13 speakers..."
                startAnimationShift={310}
            />
            <RecapImage
                srcImage={staticFile('/partners.png')}
                text="Pleins de sponsors..."
                startAnimationShift={370}
                isCover={false}
            />
            <RecapImage
                srcImage="https://pbs.twimg.com/media/FUvt_r5WAAAuyNo?format=jpg&name=large"
                text="Des centaines de lignes de JS..."
                startAnimationShift={430}
            />
            <RecapImage
                srcImage="https://pbs.twimg.com/media/Fj9ZiJPWYAELFSK?format=jpg&name=large"
                text="Et tout autant de bières..."
                startAnimationShift={490}
            />

            <Sequence from={530} name="MessageContainer">
                <AbsoluteFill style={{
                    backgroundColor: '#C53333',
                    transform: `scale(${scaleMessage})`,
                    border: '5px solid white',
                }}/>
                <LottieAsset loop assetLink='lf20_by7epsey' style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                }}/>
            </Sequence>

            <Sequence from={570} name="Message">
                <div style={{
                    fontFamily,
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '100px',
                    width: '85%',
                    height: '85%',
                    margin: 'auto',
                    padding: '80px',
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 80,
                }}>
                    <span style={{opacity: opacityTextOrga, transform: `scale(${scaleUpTextOrga})`}}>L&apos;équipe orga du LyonJS vous souhaite de joyeuses fêtes de fin d&apos;année !</span>
                    <span style={{opacity: opacityTextOrga, transform: `scale(${scaleUpTextOrga})`}}>On se retrouve pour years++</span>
                </div>
                <LottieAsset loop assetLink='lf20_cgwai2nz' style={{
                    opacity: opacityTextOrga,
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '40%',
                    transform: `translateX(${animateRightToLeft}px)`,
                    overflow: 'hidden',
                }}/>
                <LyonJSLogo style={{
                    opacity: opacityTextOrga,
                    position: 'absolute',
                    bottom: 50,
                    right: 50,
                    width: '100px',
                }}/>
            </Sequence>
        </AbsoluteFill>
    );
};

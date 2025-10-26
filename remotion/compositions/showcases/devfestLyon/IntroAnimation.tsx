import React from 'react';
import {
    AbsoluteFill,
    Img,
    interpolate,
    spring,
    staticFile,
    useCurrentFrame,
    useVideoConfig,
} from 'remotion';

export const IntroAnimation = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const saintJeanSlide = spring({
        frame: frame - 30,
        fps,
        from: 320,
        to: -45,
        durationInFrames: 50,
        config: { damping: 12 },
    });

    const crayonSlide = spring({
        frame: frame - 40,
        fps,
        from: 350,
        to: 30,
        durationInFrames: 50,
        config: { damping: 12 },
    });

    const fourviereSlide = spring({
        frame: frame - 35,
        fps,
        from: 350,
        to: -60,
        durationInFrames: 50,
        config: { damping: 12 },
    });

    const incitySlide = spring({
        frame: frame - 42,
        fps,
        from: 320,
        to: -35,
        durationInFrames: 50,
        config: { damping: 12 },
    });

    const bellecourSlide = spring({
        frame: frame - 38,
        fps,
        from: 300,
        to: -70,
        durationInFrames: 50,
        config: { damping: 12 },
    });

    const titleOpacity = spring({
        frame: frame - 60,
        fps,
        from: 0,
        to: 1,
        durationInFrames: 30,
    });

    const titleScale = spring({
        frame: frame - 60,
        fps,
        from: 0.8,
        to: 1,
        durationInFrames: 40,
        config: { damping: 10 },
    });

    const transitionStart = 170;
    const transitionDuration = 90;

    const transitionProgress = interpolate(
        frame,
        [transitionStart, transitionStart + transitionDuration],
        [0, 1],
        {
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
        }
    );

    const saintJeanUp = spring({
        frame: frame - transitionStart,
        fps,
        from: 0,
        to: -60,
        durationInFrames: 20,
        config: {
            damping: 8,
            stiffness: 60,
            mass: 1,
            overshootClamping: false
        },
    });

    const saintJeanDown = spring({
        frame: frame - transitionStart - 15,
        fps,
        from: 0,
        to: 600,
        durationInFrames: 60,
        config: {
            damping: 6,
            stiffness: 50,
            mass: 1.2,
            overshootClamping: false
        },
    });

    const crayonUp = spring({
        frame: frame - transitionStart - 3,
        fps,
        from: 0,
        to: -60,
        durationInFrames: 20,
        config: {
            damping: 8,
            stiffness: 60,
            mass: 1,
            overshootClamping: false
        },
    });

    const crayonDown = spring({
        frame: frame - transitionStart - 18,
        fps,
        from: 0,
        to: 600,
        durationInFrames: 60,
        config: {
            damping: 6,
            stiffness: 50,
            mass: 1.2,
            overshootClamping: false
        },
    });

    const fourviereUp = spring({
        frame: frame - transitionStart - 7,
        fps,
        from: 0,
        to: -60,
        durationInFrames: 20,
        config: {
            damping: 8,
            stiffness: 60,
            mass: 1,
            overshootClamping: false
        },
    });

    const fourviereDown = spring({
        frame: frame - transitionStart - 22,
        fps,
        from: 0,
        to: 600,
        durationInFrames: 60,
        config: {
            damping: 6,
            stiffness: 50,
            mass: 1.2,
            overshootClamping: false
        },
    });

    const incityUp = spring({
        frame: frame - transitionStart - 2,
        fps,
        from: 0,
        to: -60,
        durationInFrames: 20,
        config: {
            damping: 8,
            stiffness: 60,
            mass: 1,
            overshootClamping: false
        },
    });

    const incityDown = spring({
        frame: frame - transitionStart - 17,
        fps,
        from: 0,
        to: 600,
        durationInFrames: 60,
        config: {
            damping: 6,
            stiffness: 50,
            mass: 1.2,
            overshootClamping: false
        },
    });

    const bellecourUp = spring({
        frame: frame - transitionStart - 5,
        fps,
        from: 0,
        to: -60,
        durationInFrames: 20,
        config: {
            damping: 8,
            stiffness: 60,
            mass: 1,
            overshootClamping: false
        },
    });

    const bellecourDown = spring({
        frame: frame - transitionStart - 20,
        fps,
        from: 0,
        to: 400,
        durationInFrames: 60,
        config: {
            damping: 6,
            stiffness: 50,
            mass: 1.2,
            overshootClamping: false
        },
    });

    const saintJeanExit = saintJeanUp + saintJeanDown;
    const crayonExit = crayonUp + crayonDown;
    const fourviereExit = fourviereUp + fourviereDown;
    const incityExit = incityUp + incityDown;
    const bellecourExit = bellecourUp + bellecourDown;

    const logoExitOpacity = interpolate(transitionProgress, [0, 0.5], [1, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });

    const logoExitScale = interpolate(transitionProgress, [0, 1], [1, 0.8], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
    });

    return (
        <AbsoluteFill>
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'flex-end',
                    zIndex: 40,
                }}
            >
                <Img
                    src={staticFile('/images/showcases/devfestLyon/saint-jean.svg')}
                    style={{
                        height: '400px',
                        transform: `translateY(${saintJeanSlide + saintJeanExit}px)`,
                        filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5))',
                    }}
                />

                <Img
                    src={staticFile('/images/showcases/devfestLyon/crayon.svg')}
                    style={{
                        height: '450px',
                        transform: `translateY(${crayonSlide + crayonExit}px)`,
                        filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5))',
                    }}
                />

                <Img
                    src={staticFile('/images/showcases/devfestLyon/fourviere.svg')}
                    style={{
                        height: '420px',
                        transform: `translateY(${fourviereSlide + fourviereExit}px)`,
                        filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5))',
                    }}
                />

                <Img
                    src={staticFile('/images/showcases/devfestLyon/incity.svg')}
                    style={{
                        height: '400px',
                        transform: `translateY(${incitySlide + incityExit}px)`,
                        filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5))',
                    }}
                />

                <Img
                    src={staticFile('/images/showcases/devfestLyon/bellecour.svg')}
                    style={{
                        height: '300px',
                        transform: `translateY(${bellecourSlide + bellecourExit}px)`,
                        filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.5))',
                    }}
                />
            </div>


            <div
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: '50%',
                    transform: `translate(-50%, -50%) scale(${titleScale * logoExitScale})`,
                    opacity: titleOpacity * logoExitOpacity,
                    textAlign: 'center',
                    zIndex: 100,
                }}
            >
                <Img
                    src={staticFile('/images/showcases/devfestLyon/logo-blanc.png')}
                    style={{
                        height: '200px',
                        filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.8))',
                    }}
                />
            </div>
        </AbsoluteFill>
    );
};

import {AbsoluteFill, Sequence} from "remotion";
import {TalkSpeakerPicture} from "../talk/TalkSpeakerPicture";

export const Speakers: React.FC<{ speakers: string[] }> = ({speakers}) => {
    return (
        <Sequence from={20} name="Picture">
            <AbsoluteFill
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 100,
                }}
            >
                {
                    speakers.map((speaker, index) => {
                        const shadowColor = index % 2 === 0 ? '#6abfad' : '#222333';

                        return (
                            <TalkSpeakerPicture
                                style={{
                                    position: 'relative',
                                    left: 'unset',
                                    transform: 'translate(0)',
                                    width: 250,
                                    height: 250,
                                    border: 'none',
                                    boxShadow: `0 0 0 10px white, 0 0 0 20px ${shadowColor}`,
                                }}
                                speakerPicture={speaker}
                            />
                        )
                    })
                }
            </AbsoluteFill>
        </Sequence>
    );
}
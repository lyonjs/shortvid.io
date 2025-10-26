import React from 'react';
import { loadFont } from '@remotion/google-fonts/TitanOne';
import { AbsoluteFill, Sequence } from 'remotion';
import { z } from 'zod';

import { ShowcaseSchema } from '../showcases.types';

import { Background } from './Background';
import { Details } from './Details';
import { Logo } from './Logo';
import { Speakers } from './Speakers';
import { TalkTitle } from './TalkTitle';

const { fontFamily } = loadFont();

export const TalkDetails = ({
    title,
    speakers,
    date,
    time,
    location,
}: z.infer<typeof ShowcaseSchema>) => {
    return (
        <AbsoluteFill
            style={{
                backgroundColor: '#223364',
                overflow: 'hidden',
                fontFamily,
            }}
        >
            <Sequence name="Background">
                <Background />
            </Sequence>
            <Sequence name="Logo" from={10}>
                <Logo />
            </Sequence>
            <Sequence name="Speakers" from={30}>
                <Speakers speakers={speakers} />
                <TalkTitle title={title} />
            </Sequence>
            <Sequence name="Details" from={70}>
                <Details date={date} time={time} location={location} />
            </Sequence>
        </AbsoluteFill>
    );
};

import React from 'react';
import { Composition, Folder } from 'remotion';

import { defaultTalkValues } from '../../../../src/data/defaultValues';
import { ShowcaseSchema } from '../showcases.types';

import { DevfestLyon } from './DevfestLyon';

export const DevfestLyonComposition: React.FC = () => {
    return (
        <Folder name="DevfestLyon">
            <Composition
                id="DevfestLyonTalk"
                component={DevfestLyon}
                durationInFrames={500}
                fps={60}
                width={1280}
                height={720}
                schema={ShowcaseSchema}
                defaultProps={defaultTalkValues}
            />
        </Folder>
    );
};


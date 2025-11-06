import React from 'react';
import {Folder, Still} from 'remotion';

import {Badge, BadgeSchema} from './Badge';

export const BadgesComposition: React.FC = () => {
    return (
        <Folder name="Badges">
            <Still
                id="Badge"
                component={Badge}
                schema={BadgeSchema}
                width={1200}
                height={800}
                defaultProps={{
                    firstName: 'John',
                    lastName: 'Doe',
                    ticketNumber: 'A001',
                }}
            />
        </Folder>
    );
};





import React from 'react';
import { loadFont } from '@remotion/google-fonts/OpenSans';
import { AbsoluteFill, Img, staticFile } from 'remotion';
import { z } from 'zod';

export const BadgeSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    ticketNumber: z.string().min(1),
    logoUrl: z.string().url().optional(),
    role: z.enum(['speaker', 'speakeuse', 'sponsor']).optional(),
});

const { fontFamily } = loadFont();

export const Badge: React.FC<z.infer<typeof BadgeSchema>> = ({
    firstName,
    lastName,
    ticketNumber,
    logoUrl,
    role,
}) => {
    const logoSrc = logoUrl || staticFile('/images/showcases/VF_noir et blanc-04.png');
    return (
        <AbsoluteFill
            style={{
                backgroundColor: 'white',
                color: '#000',
                fontFamily,
            }}
        >
            <Img
                src={logoSrc}
                style={{
                    position: 'absolute',
                    top: 24,
                    right: 24,
                    width: 200,
                    height: 'auto',
                    objectFit: 'contain',
                }}
            />

            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    lineHeight: 1.1,
                }}
            >
                <div
                    style={{
                        fontSize: 160,
                        fontWeight: 800,
                        letterSpacing: -1,
                    }}
                >
                    {firstName}
                </div>
                <div
                    style={{
                        fontSize: 140,
                        fontWeight: 700,
                        marginTop: 8,
                        letterSpacing: -0.5,
                    }}
                >
                    {lastName}
                </div>
            </div>

            <div
                style={{
                    position: 'absolute',
                    left: 24,
                    bottom: 24,
                    fontSize: 40,
                    fontWeight: 900,
                    opacity: 0.8,
                    textTransform: 'uppercase',
                }}
            >
                {role}
            </div>

            <div
                style={{
                    position: 'absolute',
                    right: 24,
                    bottom: 24,
                    fontSize: 50,
                    fontWeight: 600,
                    opacity: 0.8,
                }}
            >
                #{ticketNumber}
            </div>
        </AbsoluteFill>
    );
};



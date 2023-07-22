import {bundle} from '@remotion/bundler';
import {
    getCompositions, renderMedia, selectComposition
} from '@remotion/renderer';
import express from 'express';
import fs from 'fs';
import os from 'os';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(
    cors({
        origin: /.*.shortvid\.io$/,
        optionsSuccessStatus: 200,
        methods: 'POST',
    })
);
app.use(morgan('tiny'))

let bundled;
let compositions;

app.post('/:compositionId/', async (req, res) => {
    const sendFile = (file) => {
        fs.createReadStream(file)
            .pipe(res)
            .on('close', () => {
                res.end();
            });
    };
    try {
        const reqParams = req.params.compositionId;
        const compositionId = reqParams.match(/([^&]+)/i)[0];
        const inputProps = req.body || {}
        const video = await selectComposition( { serveUrl: bundled, id: compositionId, inputProps });
        if (!video) {
            throw new Error(`No video called ${compositionId}`);
        }
        console.log(`Generating video for compositon: ${video.id}`)
        res.set('content-type', 'video/mp4');
        res.set('cache-control', 'public, max-age=3600, immutable');

        const tmpDir = await fs.promises.mkdtemp(
            path.join(os.tmpdir(), 'remotion-')
        );
        const finalOutput = path.join(tmpDir, 'out.mp4');

        await renderMedia({
            serveUrl: bundled,
            outputLocation: finalOutput,
            inputProps,
            composition: video,
            codec: "h264",
        });

        sendFile(finalOutput);
        console.log('Video rendered and sent!');
    } catch (err) {
        console.error(`Error while generating video with url ${req.originalUrl}`);
        console.error(err)
        res.json({
            error: err,
        });
    }
});

app.listen(port, async () => {
    bundled =  await bundle('remotion/index.tsx');
    const compositions = await getCompositions(bundled);
    console.log(`Avalaible compositions: ${compositions.map(composition => composition.id).join(', ')} \n\n`);
    console.log(
        [
            `The server has started on http://localhost:${port}!`,
            'You can render a video by passing props as URL parameters.',
            '',
            'To generate a video, try this:',
            '',
            `curl -X POST http://localhost:8000/Talk --output example.mp4`,
            '',
        ].join('\n')
    );
});



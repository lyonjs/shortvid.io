#!/usr/bin/env node
const fs = require('fs');
const childProcess = require('child_process');
const {promisify} = require('util');
const yargs = require('yargs/yargs');
const snakeCase = require('lodash/snakeCase');

const {argv} = yargs(process.argv);
const readFile = promisify(fs.readFile);

const spwn = (cmd, args) =>
	new Promise((resolve, reject) => {
		const cp = childProcess.spawn(cmd, args);
		const error = [];
		const stdout = [];
		cp.stdout.on('data', (data) => {
			stdout.push(data.toString());
		});

		cp.on('error', (e) => {
			error.push(e.toString());
		});

		cp.on('close', () => {
			if (error.length) reject(error.join(''));
			else resolve(stdout.join(''));
		});
	});

const run = async () => {
	const jsonFile = argv.file;
	const {composition, title, withImage} = argv;

	if (!jsonFile) {
		console.error('Please provide JSON file to render with `--file`');
		process.exit(1);
	}
	if (!composition) {
		console.error('Please provide remotion composition to render with `--composition`');
		process.exit(1);
	}
	console.info(`Generating videos from file: ${jsonFile}`);
	try {
		const fileContent = await readFile(jsonFile, 'utf-8');
		const videos = JSON.parse(fileContent);
		for (let index = 0; index < videos.length; index++) {
			console.group(`Rendering video ${index + 1}/${videos.length}`);
			const video = videos[index];
			const fileName = `${snakeCase(video.title)}`;
			let remotionArgs = [
				'remotion',
				'render',
				composition,
				`out/${fileName}.mp4`,
				`--props=${JSON.stringify(video)}`,
				`--log=error`,
			];
			try {
				await spwn('pnpm', remotionArgs, {});
			} catch (e) {
				console.error(e);
			}

			if (fs.existsSync(`out/${fileName}.mp4`)) {
				console.info(`File out/${fileName}.mp4 generated`);
			} else {
				console.error(`ERROR with out/${fileName}.mp4`);
				console.info(`pnpm ${remotionArgs.join(' ')}`);
			}

			remotionArgs = [
				'remotion',
				'still',
				composition,
				`out/${fileName}.jpeg`,
				`--props=${JSON.stringify(video)}`,
				`--frame=-1`,
				`--log=error`,
			];
			if (withImage) {
				try {
					await spwn('pnpm', remotionArgs, {});
				} catch (e) {
					console.error(e);
				}
				if (fs.existsSync(`out/${fileName}.jpeg`)) {
					console.info(`File out/${fileName}.jpeg generated`);
				} else {
					console.error(`ERROR with out/${fileName}.jpeg`);
					console.info(`pnpm ${remotionArgs.join(' ')}`);
				}
			}
			console.groupEnd();
		}
	} catch (error) {
		console.error(`Can't parse JSON file with error`, error);
		process.exit(1);
	}
};

run();

import {useState} from 'react';
import {DateTime} from 'luxon';

import {DefaultPropsTypes} from '../types/template.types';

export type dataForGenerationType =
	| {
			[key: string]: string | number | object | Date | undefined;
	  }
	| DefaultPropsTypes;

/**
 * Actually keep the timezone when stringifying the date
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
const JSONStringifyReplacer = function (this: any, key: string, value: any) {
		if (this[key] instanceof Date) {
			return DateTime.fromJSDate(this[key]).toISO()
	}

	return value;
}

export const useGenerateVideo: (
	data: dataForGenerationType,
	compositionId: string,
) => {
	isLoading: boolean;
	videoUrl: string | undefined;
	error: string | undefined;
	getVideoLink: () => void;
} = (data, compositionId) => {
	const [isLoading, setIsLoading] = useState(false);
	const [videoUrl, setVideoUrl] = useState<string | undefined>(undefined);
	const [error, setError] = useState<string | undefined>(undefined);

	const getVideoLink = () => {
		setIsLoading(true);
		setError(undefined);

		fetch(`https://api.shortvid.io/${compositionId}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify(data, JSONStringifyReplacer),
		})
			.then((res) => res.blob())
			.then((blob) => {
				const fileURL = URL.createObjectURL(blob);
				setVideoUrl(fileURL);
				setIsLoading(false);
			})
			.catch(() => {
				setError(`Error while generating the video`);
				setIsLoading(false);
			});
	};

	return {isLoading, videoUrl, error, getVideoLink};
};

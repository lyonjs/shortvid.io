import {useState} from 'react';

import {DefaultPropsTypes} from '../types/template.types';
import {JSONStringifyReplacerWithDate} from '../utils/JSONStringifyReplacerWithDate';

export type dataForGenerationType =
	| {
			[key: string]: string | number | object | Date | undefined;
	  }
	| DefaultPropsTypes;

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
			body: JSON.stringify(data, JSONStringifyReplacerWithDate),
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

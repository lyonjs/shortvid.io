import {useState} from 'react';

export type dataForGenerationType = {
	[key: string]: string | number | object | Date | undefined;
};

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

		fetch(`http://localhost:8000/${compositionId}`, {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify(data),
		})
			.then((res) => res.blob())
			.then((blob) => {
				const fileURL = URL.createObjectURL(blob);
				setVideoUrl(fileURL);
				setIsLoading(false);
			})
			.catch((err) => {
				console.error(err);
				const generateInstance = videoUrl ? 're' : '';
				setError(`Error while ${generateInstance}generating the video`);
				setIsLoading(false);
			});
	};

	return {isLoading, videoUrl, error, getVideoLink};
};

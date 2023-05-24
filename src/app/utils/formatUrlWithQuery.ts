export type QueryParams = {
	[key: string]: string | number | undefined;
};

export const formatUrlWithQuery = (queryParams: QueryParams, path: string) => {
	const queryString = Object.entries(queryParams)
		.filter(([value]) => value)
		.map(([key, value]) => `${key}=${value}`)
		.join('&');

	return `${path}?${queryString}`;
};
